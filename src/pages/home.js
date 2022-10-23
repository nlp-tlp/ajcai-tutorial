import React, { Component } from "react";

import nlp_tlp_logo from "../images/nlp-tlp-logo.png";
import me from "../images/michael-stewart.jpg";
import centre_logo from "../images/center-logo.png";

class HomePage extends Component {
	render() {
		return (
			<>
				{/*				<p>
					Have you ever wondered how to harness the significant volume of
					knowledge buried within unstructured text? Approximately 80% of all
					data in organisations is unstructured, a large portion of which exists
					in the form of technical language such as doctor's notes, maintenance
					work orders, and traffic reports. Natural Language Processing (NLP)
					provides the means to construct knowledge graphs from unstructured
					short text, enabling the querying of knowledge held within the text.
					Knowledge graphs are employed by a wide range of top companies – eBay,
					Walmart and Volvo to name a few. But what exactly is a knowledge
					graph? Why are leading companies actively building knowledge graphs,
					and how is one created?
				</p>*/}
				<section id="abstract">
					<h2>Abstract</h2>
					<p>
						Have you ever wondered how to harness the significant volume of
						knowledge buried within unstructured text? Approximately 80% of all
						data in organisations is unstructured, a large portion of which
						exists in the form of technical language such as doctor's notes,
						maintenance work orders, and traffic reports. Natural Language
						Processing (NLP) provides the means to construct knowledge graphs
						from unstructured short text, enabling the querying of knowledge
						held within the text. Knowledge graphs are employed by a wide range
						of top companies – eBay, Walmart and Volvo to name a few. But what
						exactly is a knowledge graph? Why are leading companies actively
						building knowledge graphs, and how is one created?
					</p>
					<p>
						This tutorial provides a practical guide to knowledge graphs. We
						will begin by providing an overview of graph databases, highlighting
						their unique advantages when compared to structured data models such
						as relational tables. We will then detail the underlying natural
						language processing techniques involved in knowledge graph
						construction from text, namely named entity recognition (NER) and
						relation extraction (RE). In the second half of the tutorial, we
						will motivate the need for knowledge graphs via a simple, practical
						example in the maintenance domain. This Python notebook-based
						example will demonstrate how noisy, unstructured text such as
						maintenance work orders can be transformed into a knowledge graph to
						visualise and query unstructured data and allow domain experts to
						make informed business decisions.
					</p>
					{/*<p>
						<ul className="chevron-bullets extra-indent">
							<li>Entity recognition</li>
							<li>Lexical normalisation</li>
							<li>Knowledge graphs</li>
							<li>Ontologies</li>
							<li>Annotation</li>
							<li>Adaptive user interfaces</li>
							<li>Knowledge representation and reasoning</li>
						</ul>
					</p>*/}
				</section>
				<section id="outline">
					<h2>Tutorial Outline</h2>

					<ol className="tutorial-outline">
						<li>
							<b>What is a knowledge graph and why are they useful?</b> (55
							mins)
							<ul>
								<li>Introduction to graph databases (15 mins)</li>
								<li>Property graphs (10 mins)</li>
								<li>
									Advantages of graphs over relational databases (15 mins)
								</li>
								<li>From graph databases to knowledge graphs (10 mins)</li>
								<li>Questions (5 mins)</li>
							</ul>
						</li>
						<li>Break (5 mins)</li>
						<li>
							<b>Building knowledge graphs from unstructured text</b> (55 mins)
							<ul>
								<li>Introduction to information extraction (15 mins)</li>
								<li>
									Extracting entities via named entity recognition (25 mins)
								</li>
								<li>
									Building relationships via relation extraction (10 mins)
								</li>

								<li>Questions (5 mins)</li>
							</ul>
						</li>
						<li>Break (5 mins)</li>
						<li>
							<b>
								Code walkthrough: Building a knowledge graph from maintenance
								work orders
							</b>{" "}
							(60 mins)
							<ul>
								<li>Introduction to code and dataset (10 mins)</li>
								<li>Code notebook walkthrough (50 mins)</li>
							</ul>
						</li>
					</ol>
					{/*
					<table>
						<tr>
							<th>
								Part 1: What is a knowledge graph and why are they useful? (60
								mins)
							</th>
						</tr>
						<tr>
							<td>
								<b>- Introduction</b> (15 mins)
							</td>
						</tr>
						<tr>
							<td>
								<b>- Questions</b> (10 mins)
							</td>
						</tr>
					</table>*/}
				</section>

				<section id="speaker">
					<h2>Speaker</h2>

					<div className="flex-container flex-align-center profile">
						<div className="flex-item">
							<img src={me} alt="Michael Stewart" className="profile-photo" />
							<div className="profile-details">
								<h3>Dr. Michael Stewart</h3>
								<h4>Research Associate, UWA</h4>
								<ul className="profile-links">
									<li>
										<a
											href="https://www.linkedin.com/in/michael-stewart-80211a1a0"
											target="_blank"
											rel="noreferrer"
										>
											LinkedIn
										</a>
									</li>
									<li>
										<a
											href="https://scholar.google.com.au/citations?hl=en&user=8-kgpZkAAAAJ"
											target="_blank"
											rel="noreferrer"
										>
											Google Scholar
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="flex-item">
							<p>
								Dr. Michael Stewart received his PhD from the University of
								Western Australia in 2020. He currently works as a postdoctoral
								research fellow at The University of Western Australia supported
								by the{" "}
								<a
									href="https://maintenance.org.au"
									target="_blank"
									rel="noreferrer"
								>
									Centre for Transforming Maintenance through Data Science
								</a>
								. His research focuses on information extraction and knowledge
								graph construction from unstructured technical text, entity
								typing, and lexical normalisation. His work is published in a
								number of highly regarded venues including Knowledge
								Representation and Reasoning, Empirical Methods in Natural
								Language Processing, and the International Conference on Data
								Mining. In 2019 he was awarded the Research & Innovation Project
								of the Year - Postgraduate Tertiary Student Award at the 28th
								WAITTA INCITE Awards, and as part of a team led by Dr Wei Liu he
								was the first prize winner of the ICDM 2019 Knowledge Graph
								Contest. He is currently working on deep learning-based methods
								for constructing knowledge graphs from technical short text. He
								is also co-supervising several Honours, Masters and PhD students
								within the{" "}
								<a href="https://nlp-tlp.org" target="_blank" rel="noreferrer">
									UWA Natural and Technical Language Processing Group
								</a>
								.
							</p>
						</div>
					</div>
				</section>

				<section id="materials">
					<h2>Materials</h2>

					<p>
						Materials will be released closer to the date of the tutorial. Stay
						tuned!
					</p>
				</section>

				<section id="acknowledgment">
					<h2>Acknowledgment</h2>

					<div className="flex-container flex-align-center profile">
						<div className="flex-item acknowledgment">
							<p>
								This tutorial is supported by the ARC Training Centre for
								Transforming Maintenance Through Data Science (CTMTDS).
							</p>
							<p>
								The Centre is a partnership that uses data science to transform
								maintenance and its workforce. It will do this by eliminating
								manual, repetitive transactional work; developing models to
								enable people to make better complex decisions; providing
								standardized training for industry to improve maintenance
								productivity; and building an ongoing maintenance capability in
								our research institutions and industry.
							</p>
							<p>
								For more information on the Centre, please visit the website at{" "}
								<a
									href="https://maintenance.org.au"
									target="_blank"
									rel="noreferrer"
								>
									https://maintenance.org.au
								</a>
								.
							</p>
						</div>
						<div className="flex-item">
							<a
								href="https://maintenance.org.au"
								target="_blank"
								rel="noreferrer"
							>
								<img
									src={centre_logo}
									alt="Centre for Transforming Maintenance Through Data Science"
									className="profile-photo acknowledgment-logo"
								/>
							</a>
						</div>
					</div>
				</section>
			</>
		);
	}
}

export default HomePage;
