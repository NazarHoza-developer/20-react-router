import PublickPage from "./PublickPage";

function Publications() {
  const WOMEN_IMAGE =
    "https://media.istockphoto.com/photos/portrait-of-young-woman-with-curly-hair-in-the-city-picture-id1218228957?k=20&m=1218228957&s=612x612&w=0&h=1ExWthh3l9yXX6IiW_c8uX1KkSo2-AXlRqPXbElvh6k=";
  const MAN_IMAGE =
    "https://img.freepik.com/free-photo/waist-up-portrait-of-handsome-serious-unshaven-male-keeps-hands-together-dressed-in-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?w=2000";

  return (
    <div>
      <PublickPage
        author={{
          name: "Nazar Hoza",
          photo: WOMEN_IMAGE,
          nickname: "nazar@",  
        }}
        content="Hi evryone"
        image={MAN_IMAGE}
        date={"20 feb."}
      />
    </div>
  );
}

export default Publications;