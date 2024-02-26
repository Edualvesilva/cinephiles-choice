import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import SafeContainer from "../components/SafeContainer";

export default function Privacy() {
  return (
    <SafeContainer>
      <View style={styles.subContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.title}>
            Privacy Policy for the app cinephile's Choice
          </Text>
          <Text style={styles.text}>
            Your privacy is important to us. It is the policy of Cinephile's
            Choice to respect your privacy regarding any information we may
            collect while operating the Cinephile's Choice website and other
            sites we own and operate.
          </Text>
          <Text style={styles.text}>
            We request personal information only when we truly need it to
            provide you with a service. We do so by fair and lawful means, with
            your knowledge and consent. We also inform you why we are collecting
            it and how it will be used.
          </Text>
          <Text style={styles.text}>
            We only retain collected information for as long as necessary to
            provide the requested service. When we store data, we protect it
            within commercially acceptable means to prevent loss and theft, as
            well as unauthorized access, disclosure, copying, use, or
            modification.
          </Text>
          <Text style={styles.text}>
            We do not share personal identification information publicly or with
            third parties, except when required by law.
          </Text>
          <Text style={styles.text}>
            Our website may contain links to external sites that are not
            operated by us. Please be aware that we have no control over the
            content and practices of these sites and cannot accept
            responsibility for their respective privacy policies.
          </Text>
          <Text style={styles.text}>
            You are free to refuse our request for personal information,
            understanding that we may not be able to provide some of the desired
            services.
          </Text>
          <Text style={styles.text}>
            Your continued use of our website will be considered acceptance of
            our privacy and personal information practices. If you have any
            questions about how we handle user data and personal information,
            please contact us.
          </Text>
          <Text style={styles.subtitle}>User Commitment</Text>
          <Text style={styles.text}>
            The user agrees to make appropriate use of the content and
            information that Cinephile's Choice offers on the website, including
            but not limited to:
          </Text>
          <Text style={styles.text}>
            A) Not engage in activities that are illegal or contrary to good
            faith and public order;
          </Text>
          <Text style={styles.text}>
            B) Not disseminate propaganda or content of a racist, xenophobic
            nature, or online gambling, games of chance, any type of illegal
            pornography, terrorism propaganda, or against human rights;
          </Text>
          <Text style={styles.text}>
            C) Not to cause harm to the physical (hardware) and logical
            (software) systems of Cinephile's Choice, its suppliers, or third
            parties, or to introduce or spread computer viruses or any other
            hardware or software systems capable of causing the aforementioned
            damages.
          </Text>

          <Text style={styles.subtitle}>Further Information</Text>
          <Text style={styles.text}>
            We hope this clarifies things. As mentioned earlier, if there is
            something that you are not sure whether you need or not, it is
            generally safer to leave cookies enabled if you interact with one of
            the features you use on our site.
          </Text>
          <Text style={styles.text}>
            This policy is effective as of Nov/2022.
          </Text>
        </ScrollView>
      </View>
    </SafeContainer>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 18,
    marginVertical: 8,
  },
  subtitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginVertical: 8,
  },
  text: {
    marginVertical: 8,
  },
});
