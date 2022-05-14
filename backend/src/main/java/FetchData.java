import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;



/**
 * Servlet implementation class FetchData
 */
public class FetchData extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public FetchData() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		try {
			ConnectionToDB db = new ConnectionToDB();
			Connection con = db.connectToDb();
			Statement st = con.createStatement();
			String FETCH_DATA = "SELECT * FROM winter_internship ORDER BY sl_no";
//			SELECT * FROM winter_internship ORDER BY sl_no LIMIT 0,10;
			ResultSet rs = st.executeQuery(FETCH_DATA);
			
			List<Pojo> list = new ArrayList<Pojo>();
				while(rs.next()) {
					Pojo data = new Pojo();
					
					data.setSl_no(rs.getInt("sl_no"));
					data.setBusiness_code(rs.getString("business_code"));
					data.setCust_number(rs.getString("cust_number"));
					data.setClear_date(rs.getString("clear_date"));
					data.setBuisness_year(rs.getInt("buisness_year"));
					data.setDoc_id(rs.getString("doc_id"));
					data.setPosting_date(rs.getString("posting_date"));
					data.setDocument_create_date(rs.getString("document_create_date"));
					data.setDocument_create_date1(rs.getString("document_create_date1"));
					data.setDue_in_date(rs.getString("due_in_date"));
					data.setInvoice_currency(rs.getString("invoice_currency"));
					data.setDocument_type(rs.getString("document_type"));
					data.setPosting_id(rs.getInt("posting_id"));
					data.setArea_business(rs.getInt("area_business"));
					data.setTotal_open_amount(rs.getDouble("total_open_amount"));
					data.setBaseline_create_date(rs.getString("baseline_create_date"));
					data.setCust_payment_terms(rs.getString("cust_payment_terms"));
					data.setInvoice_id(rs.getInt("invoice_id"));
					data.setIsOpen(rs.getInt("isOpen"));
					data.setAging_bucket(rs.getString("aging_bucket"));
					data.setIs_deleted(rs.getInt("is_deleted"));
					
					list.add(data);
				}
			
				Gson gson = new GsonBuilder().serializeNulls().create();
				String Pojo_JSON = gson.toJson(list);
				response.setContentType("application/json");
				response.setCharacterEncoding("UTF-8");
				try {
					response.getWriter().write(Pojo_JSON);
				}
				catch(IOException e) {
					e.printStackTrace();
				}
				
				rs.close();
				st.close();
				con.close();
		}catch(SQLException e){
			e.printStackTrace();
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
