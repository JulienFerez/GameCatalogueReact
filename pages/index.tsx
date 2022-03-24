import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Layout from "../components/layout";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import React from "react";
import { UserProvider } from "@auth0/nextjs-auth0";

// export default function App({ Component, pageProps }) {
//   return (
//     <UserProvider>
//       <Component {...pageProps} />
//     </UserProvider>
//   );
// }

export default function Home() {
  return (
    <>
      <Layout />
      <h1>Bienvenue sur Vidéo Games.com</h1>
      <Card style={{ width: "16rem" }}>
        <Card.Img variant="top" style={{ width: "4rem" }} src="games.jpeg" />
        <Card.Body>
          <Card.Title>Liste des Jeux</Card.Title>
          <Card.Text></Card.Text>
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
          <Card.Text></Card.Text>
          <Button variant="primary" href="/platforms">
            Voir toutes les platforms
          </Button>
        </Card.Body>
      </Card>

      <Card style={{ width: "16rem" }}>
        <Card.Img variant="top" style={{ width: "4rem" }} src="login.png" />
        <Card.Body>
          <Card.Title>LOGIN</Card.Title>
          <Card.Text></Card.Text>
          <Button variant="primary" href="/api/auth/login">
            Se connecter
          </Button>
        </Card.Body>
      </Card>

      <Card style={{ width: "16rem" }}>
        <Card.Img variant="top" style={{ width: "4rem" }} src="logout.jpeg" />
        <Card.Body>
          <Card.Title>LOGOUT</Card.Title>
          <Card.Text></Card.Text>
          <Button type="button" variant="primary" href="/api/auth/logout">
            Se déconnecter
          </Button>
        </Card.Body>
      </Card>

      <Card style={{ width: "16rem" }}>
        <Card.Img variant="top" style={{ width: "4rem" }} src="profil.jpeg" />
        <Card.Body>
          <Card.Title>MON PROFIL</Card.Title>
          <Card.Text></Card.Text>
          <Button type="button" variant="primary" href="/profil">
            Voir Mon Profil
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}
