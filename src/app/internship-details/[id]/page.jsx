import { Wrapper } from "@/layout";
import InternshipDetailsMain from "@/components/internship-details";
import { internship_data } from "@/data";

export const metadata = {
  title: 'Internship Details'
}

const InternshipDetailsPage = ({ params }) => {
  const internship = internship_data.find(item => Number(item.id) === Number(params.id));

  return (
    <Wrapper>
      <InternshipDetailsMain internship={internship} />
    </Wrapper>
  );
};

export default InternshipDetailsPage;
