import db from "../Database/index.js";
function AssignmentRoutes(app) {

    app.post("/api/courses/:cid/assignments", (req, res) => {
        const { cid } = req.params;
        const newAssignment = {
          ...req.body,
          course: cid,
          _id: new Date().getTime().toString(),
        };
        db.modules.push(newAssignment);
        res.send(newAssignment);
      });

      app.delete("/api/assignments/:aid", (req, res) => {
        const { aid } = req.params;
        db.assignments = db.assignments.filter((m) => m._id !== aid);
        res.sendStatus(200);
      });
      
    app.get("/api/courses/:cid/assignments", (req, res) => {
        const { cid } = req.params;
    const assignments = db.assignments
      .filter((m) => m.course === cid);
    res.send(assignments);
  });
}
export default AssignmentRoutes;
