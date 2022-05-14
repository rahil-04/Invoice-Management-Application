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
//import com.google.gson.GsonBuilder;
/**
 * Servlet implementation class AddData
 */
public class AddData extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public AddData() {
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
		try
		{
			ConnectionToDB db = new ConnectionToDB();
			Connection con = db.connectToDb();
			Pojo data = new Pojo(); 
			Gson gson = new Gson();
			data = gson.fromJson(request.getReader(),Pojo.class);
			String ADD_DATA = "INSERT INTO winter_internship (business_code, cust_number, clear_date, buisness_year, doc_id, posting_date, document_create_date, due_in_date, invoice_currency, document_type, posting_id, total_open_amount, baseline_create_date, cust_payment_terms, invoice_id) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);";
			PreparedStatement st = con.prepareStatement(ADD_DATA);
				st.setString(1, data.getBusiness_code());
				st.setString(2, data.getCust_number());
				st.setString(3, data.getClear_date());
				st.setInt(4, data.getBuisness_year());
				st.setString(5,data.getDoc_id());
				st.setString(6, data.getPosting_date());
				st.setString(7, data.getDocument_create_date());
				st.setString(8, data.getDue_in_date());
				st.setString(9, data.getInvoice_currency());
				st.setString(10,data.getDocument_type());
				st.setInt(11,data.getPosting_id());
				st.setDouble(12, data.getTotal_open_amount());
				st.setString(13, data.getBaseline_create_date());
				st.setString(14, data.getCust_payment_terms());
				st.setInt(15, data.getInvoice_id());
			st.executeUpdate();
			con.close();
		}catch(SQLException e){
			e.printStackTrace();
		}
		catch(Exception e) {
			e.printStackTrace();
		}
	}

}
