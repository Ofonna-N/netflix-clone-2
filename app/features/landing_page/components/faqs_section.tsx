import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Typography,
} from "@mui/material";
import { Add } from "@mui/icons-material";

const faqs: {
  question: string;
  answer: string;
}[] = [
  {
    question: "What is Netflix?",
    answer:
      "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
  },
  {
    question: "How much does Netflix cost?",
    answer:
      "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $8.99 to $17.99 a month. No extra costs, no contracts.",
  },
  {
    question: "Where can I watch?",
    answer:
      "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
  },
  {
    question: "How do I cancel?",
    answer:
      "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
  },
  {
    question: "What can I watch on Netflix?",
    answer:
      "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
  },
  {
    question: "Is Netflix good for kids?",
    answer:
      "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.",
  },
  {
    question: "Why am I seeing this language?",
    answer: "Your browser preferences determine the language shown here.",
  },
];

export default function FaqsSection() {
  return (
    <Box component={"section"} sx={{ py: 3 }}>
      <Container>
        <Typography variant="h3" component="h2" gutterBottom>
          Frequently Asked Questions What is Netflix?
        </Typography>

        {faqs.map((faq, index) => {
          return (
            <Accordion square key={index} sx={{ p: 3, mb: 1 }}>
              <AccordionSummary
                key={index}
                expandIcon={<Add fontSize="large" />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography variant="h3" component="span" fontWeight={400}>
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>{faq.answer}</AccordionDetails>
            </Accordion>
          );
        })}
      </Container>
    </Box>
  );
}
