import { Wrapper } from "@/layout";
import LoginMain from "@/components/login";

export const metadata = {
  title: 'Login '
}

const LoginPage = () => {
    return (
        <Wrapper>
            <LoginMain />
        </Wrapper>
    )
}

export default LoginPage;