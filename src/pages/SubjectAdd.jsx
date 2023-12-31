import {Card} from "flowbite-react";
import {Link} from "react-router-dom";
import InputText from "../components/InputText";
import Button from "../components/Button";
import Breadcrumb from "../components/Breadcrumb";
import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const SubjectAdd = () => {
  const model = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Subjects",
      path: "/subjects",
    },
    {
      title: "Add Subject",
      path: "/add-subject",
    },
  ];

  const [SubjectName, setSubjectName] = useState("");
  const [Course, setCourse] = useState("");
  const [Semester, setSemester] = useState("");
  const [TeacherName, setTeacherName] = useState("");
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:5010/subjects`, {
        SubjectName,
        Course,
        Semester,
        TeacherName,
      });
      navigate("/subjects");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="flex-col gap-3 mb-9">
        <h2 className="text-3xl text-secondary">Subject</h2>
        <Breadcrumb model={model} />
      </div>
      <div>
        <Card className="w-full flex justify-center items-center">
          <h1 className="font-semibold text-2xl w-full flex justify-center text-title">Add a subject</h1>
          <form onSubmit={saveUser}>
            <div className="w-full flex flex-col justify-center items-center gap-5 text-title">
              <label htmlFor="">Subject Name</label>
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="input rounded-lg"
                  value={SubjectName}
                  onChange={(e) => setSubjectName(e.target.value)}
                />
              </div>
              <label htmlFor="">Course</label>
              <div>
                <input
                  type="text"
                  placeholder="Course"
                  className="input rounded-lg"
                  value={Course}
                  onChange={(e) => setCourse(e.target.value)}
                />
              </div>
              <label htmlFor="">Semester</label>
              <div>
                <input
                  type="text"
                  placeholder="Semester"
                  className="input rounded-lg"
                  value={Semester}
                  onChange={(e) => setSemester(e.target.value)}
                />
              </div>
              <label htmlFor="">Assign Teacher</label>
              <div>
                <input
                  type="text"
                  placeholder="Teacher Name"
                  className="input rounded-lg"
                  value={TeacherName}
                  onChange={(e) => setTeacherName(e.target.value)}
                />
              </div>
              <label htmlFor="">Password</label>
              <div className="flex flex-row gap-4">
                <Button type="submit">Submit</Button>
                <Button color="bg-slate-400" type="reset">
                  Reset
                </Button>
              </div>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default SubjectAdd;
