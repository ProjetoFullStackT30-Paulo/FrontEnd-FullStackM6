import Adverts from "../../components/adverts";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { StyledHero } from "./style";
import { Avatar, Button } from "@mui/material";

const Profile = () => {
  return (
    <div className="advertBody">
      <Header />

      <StyledHero>
        <section>
          <div>
            <Avatar
              sx={{ width: 80, height: 80 }}
              src="https://raw.githubusercontent.com/maidi29/custom-avatar-generator/images/images/avatar-example-3.svg "
            />
            <div>
              <span>Samuel Leão</span>
              <div>Anunciante</div>
            </div>
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
          <div>
            <Button>Criar anuncio</Button>
          </div>
        </section>
      </StyledHero>

      <Adverts isProfile />

      <Footer />
    </div>
  );
};

export default Profile;