import { Col } from "react-bootstrap";

const ProfilePicture = () => {
  return (
    <>
      <Col
        md={4}
        className="text-center"
      >
        <div className="profile-img-wrapper">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="img-fluid rounded-circle mb-3 profile-img"
          />
        </div>
        <h5>John Doe</h5>
        <p className="text-muted">Software Engineer</p>
        {/* <Button
                variant="outline-primary"
                className="mt-2"
              >
                Edit Profile
              </Button> */}
      </Col>
    </>
  );
};

export default ProfilePicture;
