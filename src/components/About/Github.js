import React, { useState, useEffect } from "react";
import GitHubCalendar from "react-github-calendar";
import { Octokit } from "@octokit/rest";
import { Row, Col, Card } from "react-bootstrap";
import { ImPointRight } from "react-icons/im";


function Github() {
  const [profile, setProfile] = useState(null);
  const username = "Shekhar7373"; // replace with your GitHub username

  useEffect(() => {
    const octokit = new Octokit();
    async function fetchProfile() {
      try {
        const { data } = await octokit.users.getByUsername({ username });
        setProfile(data);
      } catch (error) {
        console.error("Error fetching GitHub profile:", error);
      }
    }

    fetchProfile();
  }, [username]);

  if (!profile) {
    return <div>Loading...</div>;
  }
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <Row style={{ justifyContent: "center", paddingBottom: "20px" , height:"600px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        GitHub <strong className="purple">Profile</strong>
      </h1>
      <Col md={4} >
        <Card className="text-center" style={{height:"450px",display:"flex", justifyContent:"center",alignItems:"center", padding:"0", margin:"0", borderRadius:"20px", backgroundColor:"#c084f5"}}>
          <div className="img-curve" style={{padding:"0", margin:"0",borderRadius:"20px" }}><Card.Img variant="top" src={profile.avatar_url} alt="Avatar" style={{height:"280px", width:"280px"}}/></div>
          <Card.Body style={{color:"#000000"}}>
            <Card.Title>{profile.name || profile.login}</Card.Title>
            <Card.Text>{profile.bio}</Card.Text>
            {/* <Card.Text>
              <strong>Followers:</strong> {profile.followers}{" "}
              <strong>Following:</strong> {profile.following}
            </Card.Text> */}
            <Card.Text>
              <strong>Public Repositories:</strong> {profile.public_repos}
            </Card.Text>
            <a href={profile.html_url} target="_blank" rel="noopener noreferrer" style={{ color:"#000000", textDecoration:"none",  cursor:"pointer"}}>
              <ImPointRight/> Visit GitHub Profile
            </a>
          </Card.Body>
        </Card>
      </Col>
    </Row>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="Shekhar7373"
        blockSize={8}
        blockMargin={4}
        color="#c084f5"
        fontSize={14}
      />
    </Row>
  );
}

export default Github;
