import React from "react";
import MainWrapper from "../../wrapper/Main";
import { Text, Title } from "@mantine/core";

const AboutPage = () => {
  return (
    <MainWrapper>
      <div className="p-8 gap-4 grid justify-items-center">
        <Title color="blue">Yatru: Room Recommendation System</Title>
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate,
          quo minima. Cumque quibusdam rerum beatae eum, voluptates voluptate
          quisquam delectus aut maxime repellat, laborum sit ipsa, sint eos
          explicabo veritatis? Saepe, dignissimos nesciunt. Repellat dolore
          velit ullam nemo soluta aspernatur tempora cupiditate vitae fuga,
          itaque necessitatibus consequuntur ipsa exercitationem in enim. Sed at
          corrupti laborum est impedit repudiandae, sint non reprehenderit ullam
          molestias ratione libero. Voluptates molestiae enim quia asperiores
          fuga ipsam sequi tempore, porro omnis beatae a eos vero perspiciatis
          tenetur expedita aliquid vel deleniti nostrum ratione, dolorem
          reprehenderit quisquam! Adipisci dolores odio cumque quos molestias,
          iure soluta! Ex iusto quisquam animi natus ullam delectus et
          dignissimos deleniti fugiat laborum, modi adipisci commodi saepe
          suscipit possimus ipsa. Ad nobis hic nihil perferendis repellat
          facilis natus animi. Assumenda, culpa vel quia quod nesciunt
          voluptatum nemo illo ratione totam nostrum vero reprehenderit fuga
          iure aliquid laborum unde fugiat molestiae natus cumque perferendis
          facilis.
        </Text>
        <Title color="blue" order={2}>
          Project Created By:
        </Title>
        <ul className="flex gap-4 list-none font-semibold">
          <li>Aashish Kharal</li>
          <li>Nripesh Neupane</li>
          <li>Samrat Karki</li>
        </ul>
      </div>
    </MainWrapper>
  );
};

export default AboutPage;
