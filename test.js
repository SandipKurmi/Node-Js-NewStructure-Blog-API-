controller :-

  async login(req, res) {
    const response = await this.service.login(req.body);
    if (response.error) return res.status(response.statusCode).send(response);
    return res.status(response.statusCode).send(response);
  }




service :-

    async login(item) {
        try {
            let checkemail = await this.model.findOne({ "email": item.email })
            if (checkemail) {
                var checkPassword = await bcrypt.compareSync(item.password, checkemail.password);
                if (checkPassword) {  
                    const token = jwt.sign({ userID: checkemail._id }, process.env.JWT_SECRET_KEY, { expiresIn: '7d' })
                    return {
                        error: false,
                        token: token,
                        statusCode: 200,
                        data: checkemail
                    };
                } else {
                    return {
                        error: true,
                        statusCode: 401,
                        error: 'wrong Email Or Password1'
                    };
                }
            } else {
                return {
                    error: true,
                    statusCode: 401,
                    error: 'wrong Email Or Password2'
                };

            }
        } catch (error) {
            return {
                error: true,
                statusCode: 500,
                message: 'server error'
                // ,errors: err.errors,
            };
        }
    }














    app.post('/login', async (req, res) => {
        try{
            let foundUser = users.find((data) => req.body.email === data.email);
            if (foundUser) {
        
                let submittedPass = req.body.password; 
                let storedPass = foundUser.password; 
        
                const passwordMatch = await bcrypt.compare(submittedPass, storedPass);
                if (passwordMatch) {
                    let usrname = foundUser.username;
                    res.send();
                } else {
                    res.send();
                }
            }
            else {
        
                let fakePass = `$2b$$10$ifgfgfgfgfgfgfggfgfgfggggfgfgfga`;
                await bcrypt.compare(req.body.password, fakePass);
        
                res.send("<div align ='center'><h2>Invalid email or password</h2></div><br><br><div align='center'><a href='./login.html'>login again<a><div>");
            }
        } catch{
            res.send("Internal server error");
        }
    });
