

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import com.google.gson.Gson;

/**
 * Servlet implementation class Predict
 */
public class Predict extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Predict() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		try {
			ConnectionToDB db = new ConnectionToDB();
			Connection con = db.connectToDb();
			Gson gson = new Gson();
			Pojo data = new Pojo();
			data = gson.fromJson(request.getReader(), Pojo.class);
			String PREDICT_DATA = "UPDATE winter_internship\r\n"
					+ "SET aging_bucket = ?\r\n"
					+ "WHERE doc_id = ?;";
			PreparedStatement st = con.prepareStatement(PREDICT_DATA);
				st.setString(1, data.getAging_bucket());
				st.setString(2, data.getDoc_id().substring(0,10));
				st.executeUpdate();
				con.close();
		}
		catch(SQLException e){
			e.printStackTrace();
		}
		catch(Exception e) {
			e.printStackTrace();
		}
	}

}
