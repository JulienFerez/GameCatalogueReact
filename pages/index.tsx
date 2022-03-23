import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Layout from "../components/layout";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <Layout />
      <h1>Bienvenue sur Vidéo Games.com</h1>
      <Card style={{ width: "16rem" }}>
        <Card.Img variant="top" style={{ width: "4rem" }} src="games.jpeg" />
        <Card.Body>
          <Card.Title>Liste des Jeux</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary" href="/games">
            Voir tous les Jeux
          </Button>
        </Card.Body>
      </Card>

      <Card style={{ width: "16rem" }}>
        <Card.Img
          variant="top"
          style={{ width: "4rem" }}
          src="list-platforms.jpeg"
        />
        <Card.Body>
          <Card.Title>Liste des Platforms</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary" href="/platforms">
            Voir toutes les platforms
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}
