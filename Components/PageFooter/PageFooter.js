import {Button, Footer, FooterTab, Text} from "native-base";
import React from "react";

const PageFooter = () => {
  return (
    <Footer>
      <FooterTab >
        <Button badge style={styles.stndButton}>
          <Text style={styles.textContent}>Выбрать контакты</Text>
        </Button>
      </FooterTab>
    </Footer>
  )
};

export default PageFooter;