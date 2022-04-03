import type { NextPage } from "next";
import { Htag, Button, Paragraf, Tag } from "../Components";
// import Head from 'next/head'
// import Image from 'next/image'
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
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
    </div>
  );
};

export default Home;
