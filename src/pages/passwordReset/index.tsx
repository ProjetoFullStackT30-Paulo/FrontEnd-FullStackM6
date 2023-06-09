import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Paper, Button } from "@mui/material";
import { Container, Box, Form } from "./styles";
import Logo from "../../assets/logoColored.svg";
import { iEmailForReset } from "../../interfaces";
import { zodResolver } from "@hookform/resolvers/zod";
import { Footer, Header, Input } from "../../components";
import { emailForResetSchema } from "../../schemas/resetSchema";
import { sendEmailPassword } from "../../services/apiPassword";
import { TransitionAnimation } from "../../components/transitionAnimation";

export const EmailForPasswordReset = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iEmailForReset>({
    resolver: zodResolver(emailForResetSchema),
  });

  const handleReset = async (data: iEmailForReset) => {
    try {
      await sendEmailPassword(data);

      toast.success("Email enviado com sucesso.");
    } catch (error) {
      toast.error("A conta não foi encontrada, tente novamente.");
    }
  };

  return (
    <TransitionAnimation>
      <Header />

      <Container>
        <Box>
          <Paper
            elevation={0}
            sx={{ padding: 2, display: "flex", justifyContent: "center" }}
          >
            <img src={Logo} alt="Logo" />
          </Paper>

          <span>
            Digite o endereço de e-mail associado à sua conta e enviaremos um
            link para redefinir sua senha
          </span>

          <Form onSubmit={handleSubmit(handleReset)}>
            <Input
              placeholder={"Digite seu email aqui"}
              label={"Email"}
              name={"email"}
              register={register}
              error={errors.email}
              width={"100"}
            />
            <Button className="buttonBrand" type="submit" sx={{ width: "95%" }}>
              Enviar email
            </Button>

            <span>
              Ainda não possui conta? <Link to={"/register"}>Cadastrar</Link>
            </span>
          </Form>
        </Box>
      </Container>

      <Footer />
    </TransitionAnimation>
  );
};
