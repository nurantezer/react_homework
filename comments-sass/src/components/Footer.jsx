import FooterStyle from "../scss/footer.module.scss" 

const Footer = () => {
  return (
    <footer className={FooterStyle.footer}>
      <p>Copyrigth by CHATGPT {new Date().getFullYear()} </p>
    </footer>
  );
}

export default Footer