

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
/**
 * Servlet implementation class AdvanceSearch
 */
public class AdvanceSearch extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public AdvanceSearch() {
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
				int doc_id=Integer.parseInt(request.getParameter("doc_id"));
				int cust_number=Integer.parseInt(request.getParameter("cust_no"));
				int invoice_id=Integer.parseInt(request.getParameter("invoice_id"));
				int busi_year=Integer.parseInt(request.getParameter("business_year"));
				String sql="SELECT * FROM winter_internship WHERE doc_id="+doc_id+" AND cust_number="+cust_number+" AND invoice_id="+invoice_id+" AND buisness_year="+busi_year;
				ResultSet rs=st.executeQuery(sql);
				List<Pojo> l= new ArrayList<Pojo>();
				while(rs.next())
				{
					Pojo inv= new Pojo();
					
					inv.setSl_no(rs.getInt("sl_no"));
					inv.setBusiness_code(rs.getString("business_code"));
					inv.setCust_number(rs.getString("cust_number"));
					inv.setClear_date(rs.getString("clear_date"));
					inv.setBuisness_year(rs.getInt("buisness_year"));
					inv.setDoc_id(rs.getString("doc_id"));
					inv.setPosting_date(rs.getString("posting_date"));
					inv.setDocument_create_date(rs.getString("document_create_date"));
					inv.setDocument_create_date1(rs.getString("document_create_date1"));
					inv.setDue_in_date(rs.getString("due_in_date"));
					inv.setInvoice_currency(rs.getString("invoice_currency"));
					inv.setDocument_type(rs.getString("document_type"));
					inv.setPosting_id(rs.getInt("posting_id"));
					inv.setArea_business(rs.getInt("area_business"));
					inv.setTotal_open_amount(rs.getDouble("total_open_amount"));
					inv.setBaseline_create_date(rs.getString("baseline_create_date"));
					inv.setCust_payment_terms(rs.getString("cust_payment_terms"));
					inv.setInvoice_id(rs.getInt("invoice_id"));
					inv.setIsOpen(rs.getInt("isOpen"));
					inv.setAging_bucket(rs.getString("aging_bucket"));
					inv.setIs_deleted(rs.getInt("is_deleted"));
					
					l.add(inv);
				}
				Gson gson=new GsonBuilder().serializeNulls().create();
				String Pojos=gson.toJson(l);
				response.setContentType("application/json");
				response.setCharacterEncoding("UTF-8");
				try {
					 response.getWriter().write(Pojos);
				}
				catch(IOException e) {
					e.printStackTrace();
				}
				rs.close();
				st.close();
				con.close();
			}
			catch(SQLException e) {
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
