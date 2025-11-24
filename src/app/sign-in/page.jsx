import { Wrapper } from "@/layout";
import SignInMain from "@/components/sign-in";

export const metadata = {
  title: 'Sign In '
}

const SignInPage = () => {
    return (
        <Wrapper>
            <SignInMain />
        </Wrapper>
    )
}

export default SignInPage;