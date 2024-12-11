async function createUser(req, res) {
    try {
      const userData = req.body;
      const user = await userService.createUser(userData); // Ensure this calls the right service
      res.status(201).json({ user, message: "User created successfully" });
    } catch (error) {
      console.error("Error creating user:", error.message); // Log error for debugging
      res.status(400).json({ message: error.message });
    }
  }
  