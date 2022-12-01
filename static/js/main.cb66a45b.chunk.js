(this["webpackJsonpajcai-tutorial"]=this["webpackJsonpajcai-tutorial"]||[]).push([[0],{100:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),i=n(45),c=n.n(i),s=(n(85),n(5)),o=n(6),l=n(10),h=n(11),d=n.p+"static/media/uwacrest-blue.de0d0ed2.png",j=n.p+"static/media/center-logo.319a07e4.png",u=n.p+"static/media/nlp-tlp-logo.070802fa.png",b=(n(86),n.p+"static/media/michael-stewart.8986114a.jpg"),g=(n.p,n(1)),p=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("section",{id:"abstract",children:[Object(g.jsx)("h2",{children:"Abstract"}),Object(g.jsx)("p",{children:"Have you ever wondered how to harness the significant volume of knowledge buried within unstructured text? Approximately 80% of all data in organisations is unstructured, a large portion of which exists in the form of technical language such as doctor's notes, maintenance work orders, and traffic reports. Natural Language Processing (NLP) provides the means to construct knowledge graphs from unstructured short text, enabling the querying of knowledge held within the text. Knowledge graphs are employed by a wide range of top companies \u2013 eBay, Walmart and Volvo to name a few. But what exactly is a knowledge graph? Why are leading companies actively building knowledge graphs, and how is one created?"}),Object(g.jsx)("p",{children:"This tutorial provides a practical guide to knowledge graphs. We will begin by providing an overview of graph databases, highlighting their unique advantages when compared to structured data models such as relational tables. We will then detail the underlying natural language processing techniques involved in knowledge graph construction from text, namely named entity recognition (NER) and relation extraction (RE). We will motivate the need for knowledge graphs via a simple, practical example in the maintenance domain. This Python notebook-based example will demonstrate how noisy, unstructured text such as maintenance work orders can be transformed into a knowledge graph to visualise and query unstructured data and allow domain experts to make informed business decisions."})]}),Object(g.jsxs)("section",{id:"outline",children:[Object(g.jsx)("h2",{children:"Tutorial Outline"}),Object(g.jsxs)("ol",{className:"tutorial-outline",children:[Object(g.jsxs)("li",{children:[Object(g.jsx)("b",{children:"Introduction to Knowledge Graphs and Natural & Technical Language Processing"})," ","(60 mins)",Object(g.jsxs)("ul",{children:[Object(g.jsx)("li",{children:"Introduction to graph databases and knowledge graphs (10 mins)"}),Object(g.jsx)("li",{children:"What makes knowledge graphs so useful? (5 mins)"}),Object(g.jsx)("li",{children:"Knowledge Graph Construction from text (10 mins)"}),Object(g.jsx)("li",{children:"Introduction to Natural & Technical Language Processing (20 mins)"}),Object(g.jsx)("li",{children:"Questions (5 mins)"}),Object(g.jsx)("li",{children:"Break (10 mins)"})]})]}),Object(g.jsxs)("li",{children:[Object(g.jsx)("b",{children:"Building knowledge graphs from unstructured text I"})," (60 mins)",Object(g.jsxs)("ul",{children:[Object(g.jsx)("li",{children:"Step 1: Text cleaning via Lexical Normalisation (10 mins)"}),Object(g.jsx)("li",{children:"Step 2: Extracting entities via Named Entity Recognition (30 mins)"}),Object(g.jsx)("li",{children:"Questions (10 mins)"}),Object(g.jsx)("li",{children:"Break (10 mins)"})]})]}),Object(g.jsxs)("li",{children:[Object(g.jsx)("b",{children:"Building knowledge graphs from unstructured text II"})," (60 mins)",Object(g.jsxs)("ul",{children:[Object(g.jsx)("li",{children:"Step 3: Extracting relations between entities via Relation Extraction (20 mins)"}),Object(g.jsx)("li",{children:"Step 4: Putting everything together and building the knowledge graph (10 mins)"}),Object(g.jsx)("li",{children:"Step 5: Querying the knowledge graph in Neo4j (10 mins)"}),Object(g.jsx)("li",{children:"What next? (10 mins)"}),Object(g.jsx)("li",{children:"Questions (10 mins)"})]})]})]})]}),Object(g.jsxs)("section",{id:"venue",children:[Object(g.jsx)("h2",{children:"Venue"}),Object(g.jsxs)("p",{children:["The tutorial will be located in ",Object(g.jsx)("b",{children:"Freshwater Bay Room"}),", Hyatt Regency Perth, WA, Australia."]}),Object(g.jsxs)("p",{children:["It is also available online.\xa0",Object(g.jsx)("a",{href:"https://teams.microsoft.com/l/meetup-join/19%3a743a496352e64f88bcdf990c1cf6cc30%40thread.tacv2/1669626676282?context=%7b%22Tid%22%3a%2205894af0-cb28-46d8-8716-74cdb46e2226%22%2c%22Oid%22%3a%22d22e2e28-2cc7-4070-936d-6867540335ac%22%7d",target:"_blank",rel:"noreferrer",children:"Click here"})," ","to join the tutorial on Microsoft Teams on Monday 5 December 2022 at 9am AWST."]})]}),Object(g.jsxs)("section",{id:"what-to-bring",children:[Object(g.jsx)("h2",{children:"What to Bring"}),Object(g.jsx)("p",{children:"Please bring your own laptop to the tutorial. The majority of the tutorial will be a Jupyter Notebook walkthrough that demonstrates the process of building a knowledge graph from a sample dataset of technical short text. To follow along, there are two options:"}),Object(g.jsxs)("ul",{children:[Object(g.jsxs)("li",{children:[Object(g.jsx)("b",{children:"Local installation:"})," Please clone the"," ",Object(g.jsx)("a",{href:"https://github.com/nlp-tlp/ajcai-tutorial-prep",rel:"noreferrer",children:"GitHub repo"}),"\xa0and follow the README file contained within. Note that you will need to have"," ",Object(g.jsx)("a",{href:"https://neo4j.com/",target:"_blank",rel:"noreferrer",children:"Neo4j Desktop"})," ","installed, but only for sections 8 and 9 - the rest will run without Neo4j."]}),Object(g.jsxs)("li",{children:[Object(g.jsx)("b",{children:"Google Colab:"})," We have also hosted the notebook on"," ",Object(g.jsx)("a",{href:"https://colab.research.google.com/drive/1lEyOblgud5gdWzK_riGurLnrSEz08Nfi?authuser=1#scrollTo=j2KaJkHkmVNu",children:"Google Colab"}),". You will not need to install anything this way, though you will need a Google Account to be able to run the code (without a Google account, you can only view it)."]})]})]}),Object(g.jsxs)("section",{id:"materials",children:[Object(g.jsx)("h2",{children:"Materials"}),Object(g.jsxs)("p",{children:["All of the slides, the notebook, and other accompanying materials are available on the"," ",Object(g.jsx)("a",{href:"https://github.com/nlp-tlp/ajcai-tutorial-prep",rel:"noreferrer",children:"GitHub repo"}),"."]})]}),Object(g.jsxs)("section",{id:"speakers",children:[Object(g.jsx)("h2",{children:"Speaker"}),Object(g.jsxs)("div",{className:"flex-container flex-align-center profile",children:[Object(g.jsxs)("div",{className:"flex-item",children:[Object(g.jsx)("img",{src:b,alt:"Michael Stewart",className:"profile-photo"}),Object(g.jsxs)("div",{className:"profile-details",children:[Object(g.jsx)("h3",{children:"Dr. Michael Stewart"}),Object(g.jsx)("h4",{children:"Research Associate, UWA"}),Object(g.jsxs)("ul",{className:"profile-links",children:[Object(g.jsx)("li",{children:Object(g.jsx)("a",{href:"https://www.linkedin.com/in/michael-stewart-80211a1a0",target:"_blank",rel:"noreferrer",children:"LinkedIn"})}),Object(g.jsx)("li",{children:Object(g.jsx)("a",{href:"https://scholar.google.com.au/citations?hl=en&user=8-kgpZkAAAAJ",target:"_blank",rel:"noreferrer",children:"Google Scholar"})})]})]})]}),Object(g.jsx)("div",{className:"flex-item",children:Object(g.jsxs)("p",{children:["Dr. Michael Stewart received his PhD from the University of Western Australia in 2020. He currently works as a postdoctoral research fellow at The University of Western Australia supported by the"," ",Object(g.jsx)("a",{href:"https://maintenance.org.au",target:"_blank",rel:"noreferrer",children:"Centre for Transforming Maintenance through Data Science"}),". His research focuses on information extraction and knowledge graph construction from unstructured technical text, entity typing, and lexical normalisation. His work is published in a number of highly regarded venues including Knowledge Representation and Reasoning, Empirical Methods in Natural Language Processing, and the International Conference on Data Mining. In 2019 he was awarded the Research & Innovation Project of the Year - Postgraduate Tertiary Student Award at the 28th WAITTA INCITE Awards, and as part of a team led by Dr Wei Liu he was the first prize winner of the ICDM 2019 Knowledge Graph Contest. He is currently working on deep learning-based methods for constructing knowledge graphs from technical short text. He is also co-supervising several Honours, Masters and PhD students within the"," ",Object(g.jsx)("a",{href:"https://nlp-tlp.org",target:"_blank",rel:"noreferrer",children:"UWA Natural and Technical Language Processing Group"}),"."]})})]})]}),Object(g.jsxs)("section",{id:"acknowledgment",children:[Object(g.jsx)("h2",{children:"Acknowledgment"}),Object(g.jsxs)("div",{className:"flex-container flex-align-center profile",children:[Object(g.jsxs)("div",{className:"flex-item acknowledgment",children:[Object(g.jsx)("p",{children:"This tutorial is supported by the ARC Training Centre for Transforming Maintenance Through Data Science (CTMTDS)."}),Object(g.jsx)("p",{children:"The Centre is a partnership that uses data science to transform maintenance and its workforce. It will do this by eliminating manual, repetitive transactional work; developing models to enable people to make better complex decisions; providing standardized training for industry to improve maintenance productivity; and building an ongoing maintenance capability in our research institutions and industry."}),Object(g.jsxs)("p",{children:["For more information on the Centre, please visit the website at"," ",Object(g.jsx)("a",{href:"https://maintenance.org.au",target:"_blank",rel:"noreferrer",children:"https://maintenance.org.au"}),"."]})]}),Object(g.jsx)("div",{className:"flex-item",children:Object(g.jsx)("a",{href:"https://maintenance.org.au",target:"_blank",rel:"noreferrer",children:Object(g.jsx)("img",{src:j,alt:"Centre for Transforming Maintenance Through Data Science",className:"profile-photo acknowledgment-logo"})})})]})]})]})}}]),n}(r.Component),x=p,f=n(19),m=n(54),O=n(53);function w(e){return e[Math.floor(Math.random()*e.length)]}var v=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e)).isCentered=!1,r.fg=null,r}return Object(o.a)(n,[{key:"shouldComponentUpdate",value:function(){return!1}},{key:"componentDidMount",value:function(){this.resetGraphForces()}},{key:"resetGraphForces",value:function(){this.fg.d3Force("charge").strength(-55),this.fg.d3Force("link").distance(30),this.fg.d3Force("collide",m.a((function(e){return 25.5})))}},{key:"render",value:function(){var e=this,t=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:220,t=Object(f.a)(Array(e).keys()).map((function(e){return{id:e,val:17,colors:w([{fill:"#09701a",stroke:"#024a0e"},{fill:"#856613",stroke:"#543f06"}])}})),n=[],r=0;r<t.length;r++)if(0!==r)for(var a=new Set,i=0;i<1+Math.round(12*Math.random());i++){if(1*Math.random()<.6)break;var c=Math.round(Math.random()*(r-1));a.has(c)||(a.add(c),n.push({source:r,target:c}))}return{nodes:t,links:n}}();console.log(t);var n=Object(g.jsx)(O.a,{ref:function(t){return e.fg=t},height:400,graphData:t,cooldownTicks:600,onEngineStop:function(){return e.fg.pauseAnimation()},onEngineTick:function(){e.isCentered||(e.fg.centerAt(-800,0),e.isCentered=!0)},linkDirectionalArrowLength:10,linkDirectionalArrowRelPos:1,nodeColor:function(e){return e.color},linkColor:function(){return"rgba(50, 50, 50, 0.25)"},linkWidth:1,enableZoomPanInteraction:!1,d3AlphaDecay:.015,nodeCanvasObject:function(e,t,n){t.beginPath(),t.arc(e.x,e.y,e.val,0,2*Math.PI,!1),t.fillStyle=e.colors.fill,t.fill(),t.beginPath(),t.arc(e.x,e.y,e.val,0,2*Math.PI,!1),t.strokeStyle=e.colors.stroke,t.lineWidth=1,t.stroke(),t.restore()}});return Object(g.jsx)("div",{id:"hero-graph-wrapper",children:n})}}]),n}(r.Component),k=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(g.jsxs)("div",{id:"hero",className:"flex-container  flex-align-end ",children:[Object(g.jsx)("div",{className:"hero-background "}),Object(g.jsx)("div",{className:"container flex-container flex-align-center ",children:Object(g.jsxs)("div",{className:"hero-text",children:[Object(g.jsxs)("h2",{children:["A Practical Guide to"," ",Object(g.jsx)("span",{className:"highlight",children:"Knowledge Graph Construction"}),Object(g.jsx)("br",{})," from"," ",Object(g.jsx)("span",{className:"highlight",children:"Technical Short Text"})]}),Object(g.jsx)("div",{className:"ajcai-bit",children:Object(g.jsxs)("div",{className:"flex-item",children:[Object(g.jsx)("h3",{children:"Tutorial at AJCAI 2022"}),Object(g.jsxs)("h4",{children:["Monday 5 December 2022, 9am - 12pm AWST",Object(g.jsx)("br",{}),"Freshwater Bay Room, Hyatt Regency Perth, Perth, WA, Australia"]})]})})]})}),Object(g.jsx)(v,{})]})}}]),n}(r.Component),y=k,N=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(g.jsx)("header",{className:"header",children:Object(g.jsxs)("div",{className:"container flex-container flex-align-center justify-space-between",children:[Object(g.jsx)("div",{class:"header-left flex-container flex-align-center",children:Object(g.jsxs)("ul",{className:"header-nav",children:[Object(g.jsx)("li",{children:Object(g.jsx)("a",{href:"#abstract",children:"Abstract "})}),Object(g.jsx)("li",{children:Object(g.jsx)("a",{href:"#outline",children:"Outline"})}),Object(g.jsx)("li",{children:Object(g.jsx)("a",{href:"#venue",children:"Venue"})}),Object(g.jsx)("li",{children:Object(g.jsx)("a",{href:"#what-to-bring",children:"What to Bring"})}),Object(g.jsx)("li",{children:Object(g.jsx)("a",{href:"#materials",children:"Materials"})}),Object(g.jsx)("li",{children:Object(g.jsx)("a",{href:"#speakers",children:"Speaker"})})]})}),Object(g.jsx)("div",{className:"header-right flex-container flex-align-center",children:Object(g.jsxs)("div",{className:"logo-group",children:[Object(g.jsx)("a",{href:"https://maintenance.org.au",children:Object(g.jsx)("div",{class:"logo center-logo",children:Object(g.jsx)("img",{src:j,alt:"NLP-TLP Logo"})})}),Object(g.jsx)("a",{href:"https://uwa.edu.au",target:"_blank",rel:"noreferrer",children:Object(g.jsx)("div",{class:"logo",children:Object(g.jsx)("img",{src:d,className:"App-logo",alt:"UWA logo"})})}),Object(g.jsx)("a",{href:"https://nlp-tlp.org",children:Object(g.jsx)("div",{class:"logo nlp-tlp-logo",children:Object(g.jsx)("img",{src:u,alt:"NLP-TLP Logo"})})})]})})]})})}}]),n}(r.Component),T=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(g.jsx)("footer",{children:Object(g.jsx)("div",{className:"container",children:Object(g.jsx)("p",{children:"\xa9 Website by Michael Stewart."})})})}}]),n}(r.Component),A=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(N,{}),Object(g.jsx)(y,{}),Object(g.jsx)("main",{id:"main",className:"container",children:Object(g.jsx)(x,{})}),Object(g.jsx)(T,{})]})}}]),n}(r.Component),C=A,P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,108)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),i(e),c(e)}))};c.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(C,{})}),document.getElementById("root")),P()},85:function(e,t,n){},86:function(e,t,n){}},[[100,1,2]]]);
//# sourceMappingURL=main.cb66a45b.chunk.js.map