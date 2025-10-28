import HomepageSiteHeader from "@/app/(home)/HomepageSiteHeader";
import { styled } from "@linaria/react";

function Page() {
  return (
    <Wrapper>
      <HomepageSiteHeader />
    </Wrapper>
  );
}

const Wrapper = styled.div``;

export default Page;
