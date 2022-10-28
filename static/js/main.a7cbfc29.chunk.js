(this["webpackJsonpajcai-tutorial"]=this["webpackJsonpajcai-tutorial"]||[]).push([[0],{100:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),i=n(45),s=n.n(i),c=(n(85),n(5)),l=n(6),o=n(10),h=n(11),d=n.p+"static/media/uwacrest-blue.de0d0ed2.png",j=n.p+"static/media/center-logo.319a07e4.png",u=n.p+"static/media/nlp-tlp-logo.070802fa.png",b=(n(86),n.p+"static/media/michael-stewart.8986114a.jpg"),g=n.p+"static/media/tyler-bikaun.0649a2b4.jpg",p=n(1),f=function(e){Object(o.a)(n,e);var t=Object(h.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("section",{id:"abstract",children:[Object(p.jsx)("h2",{children:"Abstract"}),Object(p.jsx)("p",{children:"Have you ever wondered how to harness the significant volume of knowledge buried within unstructured text? Approximately 80% of all data in organisations is unstructured, a large portion of which exists in the form of technical language such as doctor's notes, maintenance work orders, and traffic reports. Natural Language Processing (NLP) provides the means to construct knowledge graphs from unstructured short text, enabling the querying of knowledge held within the text. Knowledge graphs are employed by a wide range of top companies \u2013 eBay, Walmart and Volvo to name a few. But what exactly is a knowledge graph? Why are leading companies actively building knowledge graphs, and how is one created?"}),Object(p.jsx)("p",{children:"This tutorial provides a practical guide to knowledge graphs. We will begin by providing an overview of graph databases, highlighting their unique advantages when compared to structured data models such as relational tables. We will then detail the underlying natural language processing techniques involved in knowledge graph construction from text, namely named entity recognition (NER) and relation extraction (RE). In the second half of the tutorial, we will motivate the need for knowledge graphs via a simple, practical example in the maintenance domain. This Python notebook-based example will demonstrate how noisy, unstructured text such as maintenance work orders can be transformed into a knowledge graph to visualise and query unstructured data and allow domain experts to make informed business decisions."})]}),Object(p.jsxs)("section",{id:"outline",children:[Object(p.jsx)("h2",{children:"Tutorial Outline"}),Object(p.jsxs)("ol",{className:"tutorial-outline",children:[Object(p.jsxs)("li",{children:[Object(p.jsx)("b",{children:"What is a knowledge graph and why are they useful?"})," (60 mins)",Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{children:"Introduction to graph databases (15 mins)"}),Object(p.jsx)("li",{children:"Property graphs (10 mins)"}),Object(p.jsx)("li",{children:"Advantages of graph databases over relational databases (10 mins)"}),Object(p.jsx)("li",{children:"From graph databases to knowledge graphs (10 mins)"}),Object(p.jsx)("li",{children:"Questions (5 mins)"}),Object(p.jsx)("li",{children:"Break (10 mins)"})]})]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("b",{children:"Building knowledge graphs from unstructured text"})," (60 mins)",Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{children:"Introduction to information extraction (15 mins)"}),Object(p.jsx)("li",{children:"Extracting entities via named entity recognition (20 mins)"}),Object(p.jsx)("li",{children:"Building relationships via relation extraction (10 mins)"}),Object(p.jsx)("li",{children:"Questions (5 mins)"}),Object(p.jsx)("li",{children:"Break (10 mins)"})]})]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("b",{children:"Code walkthrough: Building a knowledge graph from maintenance work orders"})," ","(60 mins)",Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{children:"Introduction to code and dataset (10 mins)"}),Object(p.jsx)("li",{children:"Code notebook walkthrough (50 mins)"})]})]})]})]}),Object(p.jsxs)("section",{id:"what-to-bring",children:[Object(p.jsx)("h2",{children:"What to bring"}),Object(p.jsx)("p",{children:"Please bring your own laptop to the tutorial. For the code walkthrough, please ensure Python 3.7+ is installed on your laptop, as well as Jupyter Notebook. We will be providing this notebook closer to the tutorial so you can install all of the required packages prior to the tutorial."}),Object(p.jsxs)("p",{children:["For the latter half of the code walkthrough you will need"," ",Object(p.jsx)("a",{href:"https://neo4j.com/",target:"_blank",rel:"noreferrer",children:"Neo4j Desktop"})," ","installed to follow along. You may alternatively opt to use"," ",Object(p.jsx)("a",{href:"https://neo4j.com/cloud/platform/aura-graph-database/",target:"_blank",rel:"noreferrer",children:"Neo4j Aura"}),", a free Cloud-based Neo4j environment."]})]}),Object(p.jsxs)("section",{id:"speakers",children:[Object(p.jsx)("h2",{children:"Speakers"}),Object(p.jsxs)("div",{className:"flex-container flex-align-center profile",children:[Object(p.jsxs)("div",{className:"flex-item",children:[Object(p.jsx)("img",{src:b,alt:"Michael Stewart",className:"profile-photo"}),Object(p.jsxs)("div",{className:"profile-details",children:[Object(p.jsx)("h3",{children:"Dr. Michael Stewart"}),Object(p.jsx)("h4",{children:"Research Associate, UWA"}),Object(p.jsxs)("ul",{className:"profile-links",children:[Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"https://www.linkedin.com/in/michael-stewart-80211a1a0",target:"_blank",rel:"noreferrer",children:"LinkedIn"})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"https://scholar.google.com.au/citations?hl=en&user=8-kgpZkAAAAJ",target:"_blank",rel:"noreferrer",children:"Google Scholar"})})]})]})]}),Object(p.jsx)("div",{className:"flex-item",children:Object(p.jsxs)("p",{children:["Dr. Michael Stewart received his PhD from the University of Western Australia in 2020. He currently works as a postdoctoral research fellow at The University of Western Australia supported by the"," ",Object(p.jsx)("a",{href:"https://maintenance.org.au",target:"_blank",rel:"noreferrer",children:"Centre for Transforming Maintenance through Data Science"}),". His research focuses on information extraction and knowledge graph construction from unstructured technical text, entity typing, and lexical normalisation. His work is published in a number of highly regarded venues including Knowledge Representation and Reasoning, Empirical Methods in Natural Language Processing, and the International Conference on Data Mining. In 2019 he was awarded the Research & Innovation Project of the Year - Postgraduate Tertiary Student Award at the 28th WAITTA INCITE Awards, and as part of a team led by Dr Wei Liu he was the first prize winner of the ICDM 2019 Knowledge Graph Contest. He is currently working on deep learning-based methods for constructing knowledge graphs from technical short text. He is also co-supervising several Honours, Masters and PhD students within the"," ",Object(p.jsx)("a",{href:"https://nlp-tlp.org",target:"_blank",rel:"noreferrer",children:"UWA Natural and Technical Language Processing Group"}),"."]})})]}),Object(p.jsxs)("div",{className:"flex-container flex-align-center profile",children:[Object(p.jsxs)("div",{className:"flex-item",children:[Object(p.jsx)("img",{src:g,alt:"Tyler Bikaun",className:"profile-photo"}),Object(p.jsxs)("div",{className:"profile-details",children:[Object(p.jsx)("h3",{children:"Tyler Bikaun"}),Object(p.jsx)("h4",{children:"PhD Student, UWA"}),Object(p.jsxs)("ul",{className:"profile-links",children:[Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"https://www.linkedin.com/in/tyler-bikaun/",target:"_blank",rel:"noreferrer",children:"LinkedIn"})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"https://scholar.google.com/citations?user=jZpJEnEAAAAJ&hl=en",target:"_blank",rel:"noreferrer",children:"Google Scholar"})})]})]})]}),Object(p.jsx)("div",{className:"flex-item",children:Object(p.jsxs)("p",{children:["Tyler Bikaun is a PhD candidate at the University of Western Australia supported by the"," ",Object(p.jsx)("a",{href:"https://maintenance.org.au",target:"_blank",rel:"noreferrer",children:"Centre for Transforming Maintenance through Data Science"})," ","and"," ",Object(p.jsx)("a",{href:"https://www.mriwa.wa.gov.au/",target:"_blank",rel:"noreferrer",children:"Mineral Research Institute of Western Australia"}),". His research concentrates on knowledge graph construction from noisy technical texts, data curation in low-resource domains, and generative knowledge extraction and normalisation using deep learning techniques. Tyler's work has been published in venues such as Empirical Methods in Natural Language Processing, Association for Computational Linguistics, and the Prognostic Health Management Society European Conference."]})})]})]}),Object(p.jsxs)("section",{id:"materials",children:[Object(p.jsx)("h2",{children:"Materials"}),Object(p.jsx)("p",{children:"Materials will be released closer to the date of the tutorial. Stay tuned!"})]}),Object(p.jsxs)("section",{id:"acknowledgment",children:[Object(p.jsx)("h2",{children:"Acknowledgment"}),Object(p.jsxs)("div",{className:"flex-container flex-align-center profile",children:[Object(p.jsxs)("div",{className:"flex-item acknowledgment",children:[Object(p.jsx)("p",{children:"This tutorial is supported by the ARC Training Centre for Transforming Maintenance Through Data Science (CTMTDS)."}),Object(p.jsx)("p",{children:"The Centre is a partnership that uses data science to transform maintenance and its workforce. It will do this by eliminating manual, repetitive transactional work; developing models to enable people to make better complex decisions; providing standardized training for industry to improve maintenance productivity; and building an ongoing maintenance capability in our research institutions and industry."}),Object(p.jsxs)("p",{children:["For more information on the Centre, please visit the website at"," ",Object(p.jsx)("a",{href:"https://maintenance.org.au",target:"_blank",rel:"noreferrer",children:"https://maintenance.org.au"}),"."]})]}),Object(p.jsx)("div",{className:"flex-item",children:Object(p.jsx)("a",{href:"https://maintenance.org.au",target:"_blank",rel:"noreferrer",children:Object(p.jsx)("img",{src:j,alt:"Centre for Transforming Maintenance Through Data Science",className:"profile-photo acknowledgment-logo"})})})]})]})]})}}]),n}(r.Component),x=f,m=n(19),O=n(54),w=n(53);function k(e){return e[Math.floor(Math.random()*e.length)]}var v=function(e){Object(o.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).isCentered=!1,r.fg=null,r}return Object(l.a)(n,[{key:"shouldComponentUpdate",value:function(){return!1}},{key:"componentDidMount",value:function(){this.resetGraphForces()}},{key:"resetGraphForces",value:function(){this.fg.d3Force("charge").strength(-55),this.fg.d3Force("link").distance(30),this.fg.d3Force("collide",O.a((function(e){return 25.5})))}},{key:"render",value:function(){var e=this,t=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:220,t=Object(m.a)(Array(e).keys()).map((function(e){return{id:e,val:17,colors:k([{fill:"#09701a",stroke:"#024a0e"},{fill:"#856613",stroke:"#543f06"}])}})),n=[],r=0;r<t.length;r++)if(0!==r)for(var a=new Set,i=0;i<1+Math.round(12*Math.random());i++){if(1*Math.random()<.6)break;var s=Math.round(Math.random()*(r-1));a.has(s)||(a.add(s),n.push({source:r,target:s}))}return{nodes:t,links:n}}();console.log(t);var n=Object(p.jsx)(w.a,{ref:function(t){return e.fg=t},height:400,graphData:t,cooldownTicks:600,onEngineStop:function(){return e.fg.pauseAnimation()},onEngineTick:function(){e.isCentered||(e.fg.centerAt(-800,0),e.isCentered=!0)},linkDirectionalArrowLength:10,linkDirectionalArrowRelPos:1,nodeColor:function(e){return e.color},linkColor:function(){return"rgba(50, 50, 50, 0.25)"},linkWidth:1,enableZoomPanInteraction:!1,d3AlphaDecay:.015,nodeCanvasObject:function(e,t,n){t.beginPath(),t.arc(e.x,e.y,e.val,0,2*Math.PI,!1),t.fillStyle=e.colors.fill,t.fill(),t.beginPath(),t.arc(e.x,e.y,e.val,0,2*Math.PI,!1),t.strokeStyle=e.colors.stroke,t.lineWidth=1,t.stroke(),t.restore()}});return Object(p.jsx)("div",{id:"hero-graph-wrapper",children:n})}}]),n}(r.Component),y=function(e){Object(o.a)(n,e);var t=Object(h.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("div",{id:"hero",className:"flex-container  flex-align-end ",children:[Object(p.jsx)("div",{className:"hero-background "}),Object(p.jsx)("div",{className:"container flex-container flex-align-center ",children:Object(p.jsxs)("div",{className:"hero-text",children:[Object(p.jsxs)("h2",{children:["A Practical Guide to"," ",Object(p.jsx)("span",{className:"highlight",children:"Knowledge Graph Construction"}),Object(p.jsx)("br",{})," from"," ",Object(p.jsx)("span",{className:"highlight",children:"Technical Short Text"})]}),Object(p.jsx)("div",{className:"ajcai-bit",children:Object(p.jsxs)("div",{className:"flex-item",children:[Object(p.jsx)("h3",{children:"Tutorial at AJCAI 2022"}),Object(p.jsxs)("h4",{children:["Monday 5 December 2022, 9am - 12pm AWST",Object(p.jsx)("br",{}),"Hyatt Regency Perth, Perth, WA, Australia"]})]})})]})}),Object(p.jsx)(v,{})]})}}]),n}(r.Component),N=y,A=function(e){Object(o.a)(n,e);var t=Object(h.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(p.jsx)("header",{className:"header",children:Object(p.jsxs)("div",{className:"container flex-container flex-align-center justify-space-between",children:[Object(p.jsx)("div",{class:"header-left flex-container flex-align-center",children:Object(p.jsxs)("ul",{className:"header-nav",children:[Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"#abstract",children:"Abstract "})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"#outline",children:"Tutorial Outline"})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"#speakers",children:"Speakers"})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"#what-to-bring",children:"What to Bring"})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"#materials",children:"Materials"})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"#acknowledgment",children:"Acknowledgment"})})]})}),Object(p.jsx)("div",{className:"header-right flex-container flex-align-center",children:Object(p.jsxs)("div",{className:"logo-group",children:[Object(p.jsx)("a",{href:"https://maintenance.org.au",children:Object(p.jsx)("div",{class:"logo center-logo",children:Object(p.jsx)("img",{src:j,alt:"NLP-TLP Logo"})})}),Object(p.jsx)("a",{href:"https://uwa.edu.au",target:"_blank",rel:"noreferrer",children:Object(p.jsx)("div",{class:"logo",children:Object(p.jsx)("img",{src:d,className:"App-logo",alt:"UWA logo"})})}),Object(p.jsx)("a",{href:"https://nlp-tlp.org",children:Object(p.jsx)("div",{class:"logo nlp-tlp-logo",children:Object(p.jsx)("img",{src:u,alt:"NLP-TLP Logo"})})})]})})]})})}}]),n}(r.Component),C=function(e){Object(o.a)(n,e);var t=Object(h.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(p.jsx)("footer",{children:Object(p.jsx)("div",{className:"container",children:Object(p.jsx)("p",{children:"\xa9 Website by Michael Stewart."})})})}}]),n}(r.Component),T=function(e){Object(o.a)(n,e);var t=Object(h.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(A,{}),Object(p.jsx)(N,{}),Object(p.jsx)("main",{id:"main",className:"container",children:Object(p.jsx)(x,{})}),Object(p.jsx)(C,{})]})}}]),n}(r.Component),M=T,P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,108)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),i(e),s(e)}))};s.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(M,{})}),document.getElementById("root")),P()},85:function(e,t,n){},86:function(e,t,n){}},[[100,1,2]]]);
//# sourceMappingURL=main.a7cbfc29.chunk.js.map