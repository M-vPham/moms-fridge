import React from 'react';
import { Card, Header, Grid, Image, Item, Segment, Divider } from 'semantic-ui-react'
import momDp from "../img/momAndMe.JPG";
import meDp from "../img/pomelo.JPG";
import "../styles/AboutUs.css";


const AboutUs = () => {
    return (
       <div>
            <div className="title">
                <Header as="h1" textAlign='left'>  ABOUT US </Header>
            </div>
            <div className="personalInfo">
                <Segment padded>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={10}>
                                <Header as="h2" textAlign='left'>
                                    Thuy Nguyen
                                    <Header.Subheader>Mom in question</Header.Subheader>
                                </Header>
                                <div className="momDesc">
                                    <Divider></Divider>
                                    <p>
                                        This is my mom. She's the mastermind behind all the recipes.
                                        She's a strict mother, but she truly does care for her family.
                                        Her background (as you may have noticed from the recipes) are Vietnamese recipes.
                                        My mother immigrated to Canada after the fall of Saigon. She is now the mother of 3 overgrown children.
                                        Her dream is to go back to Vietnam and help at a catholic monastery.
                                    </p>
                                    <p>
                                        While creating this website, I(Michelle) would pester my mother for her recipes every other night. Like most asian mothers,
                                        she NEVER measures her ingredients. Hence, when I asked for specific measurements, she would get angry and exclaim that "it's all in the eyes, fingers, and touch".
                                        Well Mom, your daughter is GARBAGE at visual cues, so I NEED those measurements.
                                    </p>
                                </div>
                            </Grid.Column>
                            <Grid.Column width={6}>
                                <Image centered circular src={momDp} size="medium"/>
                            </Grid.Column>
                        </Grid.Row>
                        <Divider/>
                        <Grid.Row>
                            <Grid.Column width={6}>
                                <Image centered circular src={meDp} size="medium"/>
                            </Grid.Column>
                            <Grid.Column width={10}>
                                <Header as="h2" textAlign='left'>
                                    Michelle Pham
                                    <Header.Subheader>Daughter that cannot cook for the death of her</Header.Subheader>
                                </Header>
                                <div className="momDesc">
                                    <Divider></Divider>
                                    <p>
                                        That's me! I am currently a Ryerson CS student in 3rd year. When I have time to myself (especially during this qurantine), I like to practice my drums or play boardgames.
                                        I'm currently obsessed with the boardgame Scythe. (There's something about looking in the eyes of your opponent as you obliterate their mech units). I boulder when I have
                                        free time but obviously that stopped with quarantine.
                                    </p>
                                    <p>
                                        I made this website using: React, Apollo, GraphQL, MongoDB, Semantic-UI-React. This was basically a project to learn GraphQL while also
                                        documenting my mother's recipes. She's getting pretty old and I want a place where I can have quick access to her recipes.
                                    </p>
                                    <p>
                                        And if you're wondering what's on my head. It's a husk of a pomelo fruit. In Vietnam, the skin of the pomelo fruit is cut in such a way that you can
                                        wear it as a helmet that cools down your head.
                                    </p>
                                </div>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
                <Segment>

                </Segment>
            </div>
       </div>
    );
}

export default AboutUs;