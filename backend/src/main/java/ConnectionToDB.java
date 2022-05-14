import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class ConnectionToDB {
    public Connection connectToDb() throws SQLException
    {
        String driver="com.mysql.jdbc.Driver";
        String url="jdbc:mysql://localhost/grey_goose?characterEncoding=utf8";
        String user="root";
        String password="zura";
        Connection conn=null;
        try
        {
            Class.forName(driver);
            conn=DriverManager.getConnection(url,user,password);
            return conn;
        }
        catch(SQLException | ClassNotFoundException e)
        {
            e.printStackTrace();
            return null;
        }
    }
}