
          window.__NEXT_REGISTER_PAGE('/data-editor', function() {
            var comp = module.exports=webpackJsonp([8],{127:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=a(0),i=l(s),n=a(29),r=l(n),d=a(46),m=l(d),c=a(30),o=l(c),f=a(11),u=(l(f),a(14)),p={title:"Dataset Editor",role:"UI Design & Dev",release:"August, 2016",team:[{name:"Matthew Whittemore",title:"(engineering)"},{name:"Saman Bemel-Benrud",title:"(engineering)"},{name:"David Clark",title:"(engineering)"},{name:"Tom MacWright",title:"(engineering)"}],image:i.default.createElement("div",null,i.default.createElement("div",{className:"w-60-l dn db-l w-100 fl nt5 mb3"},i.default.createElement("img",{style:{minWidth:925},className:"",src:"../static/img/de_header.png"})),i.default.createElement("div",{className:"w-60-l db dn-l mt4 w-100 fl nb6 nl5-l nl2 mb4"},i.default.createElement("img",{style:{minWidth:660},className:"",src:"../static/img/home_data.png"})))},h=[{imageSource:"../static/img/de_field.png",title:"Add property",description:"Preview existing fields in the dataset and add all fields with one click."},{imageSource:"../static/img/de_value.png",title:"Add value",description:"Show existing values for a field and the aiblity to define number or string type."},{imageSource:"../static/img/de_search.png",title:"Search features",description:"A quick to search for features based on field and value in the map context."}];t.default=function(){return i.default.createElement(o.default,null,i.default.createElement(m.default,{headerInfo:p}),i.default.createElement("div",{className:u.styles.limiter+" "+u.styles.columnContainer},i.default.createElement("div",{className:""+u.styles.leftColumn},i.default.createElement("div",{className:u.styles.txtBody+" mb4"},"Mapbox Studio dataset editor provides a simple way to create and modify geospatial data. It stores data as GeoJSON files. GeoJSONs are essentially a list of features with coordinates, geometry and property information. Users can draw, import, edit and manage features with the editor. Traditioanl GIS software often has complicated interfaces and requires specialized training to use. We wanted this tool to be accessible to not just GIS professionals, but also designers and developers who want to create data visualizations or need custom data for their apps."),i.default.createElement("div",{className:""+u.styles.txtH2},"The Challenges"),i.default.createElement("div",{className:""+u.styles.txtBody},"The most difficult part of this project is definitely prioritizing features, deciding which to build for the initial release. We wanted to provide a foundation for more complicated features down the line while maintaining a balance between simplicity and flexibility. A few main design challenges we've identified early on:"),i.default.createElement("ol",{className:u.styles.txtBody+" mb-list mt4"},i.default.createElement("li",{className:"pb2"},i.default.createElement("span",{className:"f5 dib "},"Shared property fields"),". ",i.default.createElement("span",{className:""},"Feautures inside one dataset usually share the same set of property fields. However we don't store such information in GeoJSON files. ")),i.default.createElement("li",{className:"pb2"},i.default.createElement("span",{className:"f5 dib "},"Search"),i.default.createElement("span",{className:""},". It was difficult to filter the dataset and find specific features. ")),i.default.createElement("li",{className:""},i.default.createElement("span",{className:"f5 dib "},"Precision"),i.default.createElement("span",{className:""},". Spatial data is precise and we want to give users full control when it's needed.")," ")))),i.default.createElement("div",{className:"w-100 bg-mb pv3-l white ph4-l ph2 pb3 pb0-l"},i.default.createElement("div",{className:"pt4 tc mb4 f6"},i.default.createElement("span",{className:"o-70 pl1"},"Dataset Editor Iteration 1")),i.default.createElement("div",{className:"flex-ns mw8 center flex-none pb4"},i.default.createElement("div",{style:{flex:"1 1 440px"},className:"mr3-ns mr0"},i.default.createElement("img",{className:"",src:"../static/img/de1_left.png"}),i.default.createElement("div",{className:"pv2 tl relative f6 o-70 mb4 mb0-ns"},"Feature list and property panel")),i.default.createElement("div",{style:{flex:"1 1 542px"},className:""},i.default.createElement("img",{className:"",src:"../static/img/de1_right.png"}),i.default.createElement("div",{className:"pv2 tl relative f6 o-70 mb0-ns"},"Geometry panel and multi-select")))),i.default.createElement("div",{className:u.styles.limiter+" "+u.styles.columnContainer},i.default.createElement("div",{className:""+u.styles.leftColumn},i.default.createElement("div",{className:"f5 mt2 mb2"},"Iteration 1"),i.default.createElement("div",{className:""+u.styles.txtH2},"Multi-select and Feature List"),i.default.createElement("div",{className:u.styles.txtBody+" mb3"},'In early iterations of the data editor, the UI consisted of a feature list on the left, and a map view on the right. In the list every feature needs a unique identifier. This introduces a problem because a concept like "name" does not exist in GeoJSON. Creating such a concept adds significant implementation burden.'),i.default.createElement("div",{className:u.styles.txtBody+" mb3"},'Another problem I tried to tackle here is editing the fields of multiple features at the same time. Similar to "names", the concept of "shared property fields" also don\'t exist in GeoJSON. Every feature can have a list of different property fields.'),i.default.createElement("div",{className:u.styles.txtBody+" mb3"},"The question is if we want to adopt a UI that's similar to the GeoJSON structure, or diverge from it more dramatically. We took a step back and did a few user testings. We discovered that \"names\" don't really help people find what they are looking for. They usually associate one feature with multiple properties and its actual location on the map. Tom suggested removing the list design and simplifying the UI to focus on the main tasks: draw, import and edit."))),i.default.createElement("div",{className:"w-100 bg-mb pv3-l white ph4-l ph2 pb3 pb0-l"},i.default.createElement("div",{className:"pt4 tc mb4 f6"},i.default.createElement("span",{className:"o-70 pl1"},"Dataset Editor Iteration 2")),i.default.createElement("div",{className:"flex-ns mw8 center flex-none pb4"},i.default.createElement("div",{style:{flex:"1 1 533px"},className:"mr5-ns mr0"},i.default.createElement("img",{className:"",src:"../static/img/de2_left.png"}),i.default.createElement("div",{className:"pv2 tl relative f6 o-70 mb4 mb0-ns"},"Property panel and code panel")),i.default.createElement("div",{style:{flex:"1 1 359px"},className:""},i.default.createElement("img",{className:"",src:"../static/img/de2_right.png"}),i.default.createElement("div",{className:"pv2 tl relative f6 o-70 mb0-ns"},"A layout variation: display editor inside a popover.")))),i.default.createElement("div",{className:u.styles.limiter+" "+u.styles.columnContainer},i.default.createElement("div",{className:""+u.styles.leftColumn},i.default.createElement("div",{className:"f5 mt2 mb2"},"Iteration 2"),i.default.createElement("div",{className:""+u.styles.txtH2},"Property and Code Editor"),i.default.createElement("div",{className:u.styles.txtBody+" mb3"},'The second major iteration is mostly about simplifying. Without the feature list panel, there\'s a lot more space to directly draw on the map. By removing multi-select, we can focus on refining single feature edit. The "name" concept was completely removed in this iteration. Instead we used geometry type plus coordinates to represent the feature.'),i.default.createElement("div",{className:u.styles.txtBody+" mb3"},"A big feature we added here is the code editor. Users can access it through the ",i.default.createElement("code",{className:"f7"},"view source")," tab. This allows for more precise control over the data, especially when people want to copy-paste coordinates. The design also reflects how the data is represented in the API level. It is a good example of how we retain flexibility and show complexity only when it's needed."),i.default.createElement("div",{className:u.styles.txtBody+" mb3"},"Another main focus of this iteration is the draw interactions. How to start drawing, modify a node of the shape or close a shape? I sketched out some ideas and worked with Matthew to implement them in mapbox-gl-draw, the framework dataset editor uses for this interaction.")),i.default.createElement("div",{className:""+u.styles.rightColumn},i.default.createElement("div",{className:""+u.styles.rightColumnContent},i.default.createElement("img",{style:{width:266},className:"pl1 dib",src:"../static/img/de_draw.png"}),i.default.createElement("div",{className:"o-30 mt3  f7 lh-copy"},"Draw interactions")))),i.default.createElement("div",{className:"w-100 bg-mb pv3-l white ph4-l ph2 pb4 pb0-l"},i.default.createElement("div",{className:"pt4 tc mb4 f6"},i.default.createElement("span",{className:"o-70 pl1"},"Dataset Editor Iteration 3")," ",i.default.createElement("span",{className:"o-40"},"June, 2016")),i.default.createElement("div",{className:"flex-ns mw8 center flex-none pb4"},i.default.createElement("div",{style:{flex:"1 1 500px"},className:"mr4-ns mr0"},i.default.createElement("img",{className:"",src:"../static/img/de3_left.png"}),i.default.createElement("div",{className:"pv2 tl relative f6 o-70 mb4 mb0-ns"},"Property panel")),i.default.createElement("div",{style:{flex:"1 1 335px"},className:""},i.default.createElement("img",{className:"",src:"../static/img/de3_right.png"}),i.default.createElement("div",{className:"pv2 tl relative f6 o-70 mb0-ns"},"Location and feature search.")))),i.default.createElement("div",{className:"bg-near-white w-100 pv4 lh-copy"},i.default.createElement("div",{className:""+u.styles.limiter},h.map(function(e,t){return i.default.createElement("div",{className:"fl pv3 w-100  w-third-ns pr4-ns"},i.default.createElement("img",{style:{width:280},src:e.imageSource}),i.default.createElement("div",{className:"f5 mt3"},e.title),i.default.createElement("div",{className:"f6 o-60 mt1"},e.description))}))),i.default.createElement("div",{className:""+u.styles.limiter},i.default.createElement("div",{className:u.styles.leftColumn+" mt4 mb4"},i.default.createElement("div",{className:"f5 mt2 mb2"},"Iteration 3"),i.default.createElement("div",{className:""+u.styles.txtH2},"Property Editing and Feature Search"),i.default.createElement("div",{className:u.styles.txtBody+" mb3"},"With almost all the basic functionalities in place, we started more aggressively user-testing the tool every week. User testings at this stage helped us identify intricate problems and solve them through minimum UI changes."),i.default.createElement("div",{className:""+u.styles.txtBody},"The property values can be a number or string type. This differentiation is important when creating filters for visualization. I added a type toggle next to values that contains number characters only to solve the problem. We also added to a grid of small location preview images to the search UI to help users find features more quickly.")),i.default.createElement("div",{className:"w-100 mt5 flex-l flex-none br2 mb4"},i.default.createElement("div",{style:{flex:"auto 1 824px"},className:""},i.default.createElement("img",{style:{width:824},className:"br2 shadow nl0",src:"../static/img/de_view.png"})),i.default.createElement("div",{style:{flex:"1 1 240px"},className:"lh-copy flex pl4-l pl0"},i.default.createElement("div",{className:"self-end f7 mb4-l mt3 mt0-l"},i.default.createElement("div",{className:""+u.styles.txtH3},"Dataset view page"),i.default.createElement("div",{className:""+u.styles.txtSbody},"An overview of the dataset and a starting point for further actions like visualization or development."))))),i.default.createElement("div",{className:"w-100 bg-near-white pv3 lh-copy"},i.default.createElement("div",{className:""+u.styles.limiter},i.default.createElement("div",{className:"flex-l flex-none items-end"},i.default.createElement("div",{style:{flex:"1 1 500px"},className:"mr4-l mr0 mb4 mb0-l"},i.default.createElement("div",{className:" overflow-y-hidden"},i.default.createElement("img",{style:{width:500},className:"shadow",src:"../static/img/de_modal_new.png"})),i.default.createElement("div",{className:u.styles.txtH3+" mt2"},"New dataset"),i.default.createElement("div",{className:""+u.styles.txtSbody},"Create a blank dataset or import from other sources.")),i.default.createElement("div",{style:{flex:"1 1 500px"},className:"ml4-l ml0"},i.default.createElement("div",{className:"overflow-y-hidden"},i.default.createElement("img",{style:{width:500},className:"shadow",src:"../static/img/de_modal_export.png"})),i.default.createElement("div",{className:u.styles.txtH3+" mt2"},"Dataset export"),i.default.createElement("div",{className:""+u.styles.txtSbody},"Export to a new tileset or overwrite."))))),i.default.createElement("div",{className:""+u.styles.limiter},i.default.createElement("div",{className:""+u.styles.leftColumn},i.default.createElement("div",{className:u.styles.txtH2+" mt3"},"What I learned"),i.default.createElement("div",{className:u.styles.txtBody+" mb3"},"Test early and often. Sometimes the problems are so intricate it's hard to believe their existance without watching another person struggling with it with my own eyes. User testing prevents us from relying too much on what have been done in the past. It helps us focus on designing practical systems that support interactions."),i.default.createElement("div",{className:u.styles.txtBody+" mb3"},"Design is really a team team effort, especially for a complicated product with many moving parts. In the past I often became frustrated when I could not get other people to like my work. But arguments can often bring in new perspectives. I don't need to agree with all of them but I have to understand them. It's less about winning all the battles, and more about realizing that I can not produce the best work without the people around me."),i.default.createElement("div",{className:u.styles.txtBody+" mb4"},"Mapbox Studio dataset editor is free and in active development. You can learn more about the tool ",i.default.createElement("a",{className:""+u.styles.link,href:"https://www.mapbox.com/mapbox-studio/"},"here")," and start using it today!"))),i.default.createElement(r.default,null))}},243:function(e,t,a){e.exports=a(127)},46:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=a(6),i=l(s),n=a(1),r=l(n),d=a(2),m=l(d),c=a(8),o=l(c),f=a(7),u=l(f),p=a(0),h=l(p),v=a(4),y=(l(v),a(14)),g=a(11),E=(l(g),a(21)),N=l(E),w=function(e){function t(){return(0,r.default)(this,t),(0,o.default)(this,(t.__proto__||(0,i.default)(t)).apply(this,arguments))}return(0,u.default)(t,e),(0,m.default)(t,[{key:"render",value:function(){var e=this.props.headerInfo;return h.default.createElement("div",{className:"bg-near-white overflow-hidden lh-title"},h.default.createElement("div",{className:""+y.styles.limiter},h.default.createElement(N.default,null),h.default.createElement("div",{className:"mt6-l mt5 center cb cf"},h.default.createElement("div",{className:"mb4 mt3 w-40-l fl-l fn"},h.default.createElement("div",{className:"f5 o-40"},"Case Study"),h.default.createElement("div",{className:""+y.styles.txtH1},e.title),h.default.createElement("div",{className:"w-40-m w-100-l fl w-100"},h.default.createElement("div",{className:" mb3 fl"},h.default.createElement("div",{className:"f6 mt3 o-40"},"My Role"),h.default.createElement("div",{className:"f6 pt1 "},e.role),h.default.createElement("div",{className:"f6 mt3 o-40"},"Release"),h.default.createElement("div",{className:"f6 pt1 "},e.release))),h.default.createElement("div",{className:"w-60-m w-100 fl w-100-l"},h.default.createElement("div",{className:"f6 mt3 o-40"},"Team"),e.team.map(function(e,t){return h.default.createElement("div",{key:"role"+t,className:"f6 pt1"},e.name," ",h.default.createElement("span",{className:"o-40"},e.title))}))),e.image)))}}]),t}(h.default.Component);t.default=w}},[243]);
            return { page: comp.default }
          })
        