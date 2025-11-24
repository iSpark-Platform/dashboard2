import { Wrapper } from "@/layout";
import PrivacyPolicyMain from "@/components/privacy-policy";

export const metadata = {
  title: 'Privacy Policy'
}

const PrivacyPolicyPage = () => {
    return (
        <Wrapper>
            <PrivacyPolicyMain />
        </Wrapper>
    )
}

export default PrivacyPolicyPage;