import type { NextPage } from "next";
import { useState } from "react";
import { Htag, Button, Paragraf, Tag, Rating } from "../Components";
// import Head from 'next/head'
// import Image from 'next/image'
import styles from "../styles/Home.module.css";
import {Layout} from "../Components/Layout"
const Home: NextPage = () => {
  const [rating, setRating] = useState<number>(4);

  return (
    <Layout>
      <Htag tag={1}>asfasfsaf</Htag>
      <Button arrow="right" appearance="secondary">
        кнопка
      </Button>
      <Paragraf size="s">asfsafsfsafs</Paragraf>
      <Tag size="s" color="ghost">
        sfsdfsdf
      </Tag>

      <Tag size="m" color="grey">
        sfsdfsdf
      </Tag>
      <Tag size="m" color="green">
        sfsdfsdf
      </Tag>
      <Tag size="m" color="primary">
        sfsdfsdf
      </Tag>

      <Rating rating={rating} setRating={setRating} isEditable />
    </Layout>
  );
};

export default Home;
