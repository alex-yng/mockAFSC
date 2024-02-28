import Header from "../components/Header.jsx";
import FullCard from "../components/FullCard.jsx";

export default function About() {
  return (
    <>
      {/* Header */}
      <Header pageTitle="About" />

      {/* About Content */}
      {/* we can include benefits for becoming a member, and what afsc strives to do  */}
      <section className="container mx-auto">
        <div className="flex mt-8 mb-32 justify-center">
          <FullCard description="The Ames Figure Skating Club is located at the Ames/ISU Ice Arena, 1507 Gateway Hills Park Drive in Ames, Iowa. We provide skaters of all ages and abilities many opportunities through our Learn to Skate program along with the option of joining AFSC and taking their skating to higher levels of skill and enjoyment.   Ames Figure Skating Club is dedicated to providing a safe, fun and supportive environment for skaters of all ages and abilities to achieve their skating goals." />
        </div>
      </section>
    </>
  );
}
