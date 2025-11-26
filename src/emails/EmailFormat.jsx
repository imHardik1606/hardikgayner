import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Heading,
} from "@react-email/components";

export default function EmailFormat({ senderEmail, subject, message }) {
  return (
    <Html>
      <Head />
      <Body className="bg-gray-50 font-sans p-5">
        <Container className="bg-white rounded-lg max-w-md mx-auto p-6 border border-gray-200">
          <Heading className="text-2xl font-semibold text-gray-900 mb-2">
            New Contact Message
          </Heading>

          <Section className="mb-4">
            <Text className="text-sm text-gray-600">
              <strong className="font-medium text-gray-800">From:</strong>{" "}
              {senderEmail}
            </Text>

            {subject && (
              <Text className="text-sm text-gray-600 mt-1">
                <strong className="font-medium text-gray-800">Subject:</strong>{" "}
                {subject}
              </Text>
            )}
          </Section>

          <Section className="bg-gray-100 p-4 rounded-md">
            <Text className="text-base text-gray-800 bg-gray-500 font-sans leading-relaxed m-0">
              {message}
            </Text>
          </Section>

          <Text className="text-xs text-gray-500 mt-4 text-center">
            This email was sent via your portfolio contact form.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
