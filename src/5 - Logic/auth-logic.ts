import pool from "../2 - Utils/dal";
import { CredentialsModel, UserModel } from "../4 - Models/userModel";




export const signUp = async (user: UserModel):Promise<UserModel> => {
        // Insert the user into the database
        const query = `
        INSERT INTO users (firstname, lastname, email, gender, password, repassword)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING *;
        `;
        const values = [user.firstname, user.lastname, user.email, user.gender, user.password, user.repassword];
        const result = await pool.query(query, values);
        console.log(result)
        return user
}

export const login = async (credentials: CredentialsModel) => {
    const query = `
      SELECT * FROM users
      WHERE email = $1 AND password = $2;
    `;
    const values = [credentials.email, credentials.password];
  
    try {
      const result = await pool.query(query, values)
      const user = result.rows[0];
      delete result.rows[0].password
      delete result.rows[0].repassword
  
      return user;
    } catch (error) {
      throw error;
    }
  };