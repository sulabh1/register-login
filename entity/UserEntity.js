const { CRUD } = require("../providers");

class UserEntity extends CRUD {
  constructor(model) {
    super(model);
  }

  //creates the user
  async create(req) {
    const { name, email, password } = req.body;
    //Searching for existed user
    const existedUser = await this.model.findOne({ where: { email } });

    //throwing Error if there is existed user
    if (existedUser) {
      throw new Error("User already exist");
    }
    return this.model.create({ name, email, password });
  }

  //user login
  async loginUser(req) {
    const { email, password } = req.body;

    //Throwing error if incorrect data is provided
    if (!email || !password) {
      throw new Error("Please provide email or password");
    }

    //querying user with email
    const userWithEmail = await this.model.findOne({ where: { email } });

    //verifying user existance
    if (!userWithEmail) {
      throw new Error("Incorrect Email or password");
    }

    //password comparision
    const passwordValidation = await this.model.validatePassword(
      password,
      userWithEmail.password
    );

    //Error for incorrect password
    if (!passwordValidation) {
      throw new Error("Incorrect Email or password");
    }

    return "Logged in";
  }
}
module.exports = UserEntity;
