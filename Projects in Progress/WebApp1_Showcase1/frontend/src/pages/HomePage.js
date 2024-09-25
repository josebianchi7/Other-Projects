import { React } from 'react';
            
            
function HomePage() {
    return (     
        <>       
            <h2>Home</h2>
            <article>
                <p className="pageDescrip">
                    {/* Explain your career goals. */}
                    <strong>Career Goals:</strong>
                    &nbsp;&nbsp;&nbsp;My career goals include developing my technical skills in multiple 
                    engineering disciplines to continually obtain valuable results for a 
                    company that shares my values. There is no specific title I am chasing. 
                    I enjoy employing creativity and critical thinking in the workplace, 
                    and therefore seek a career that I can problem-solve and be proud to 
                    call my place of work. Most of all, I aspire to work on renewable energy 
                    products in some capacity from either quality assurance or data management. 
                    I would also gladly devote myself to industries with focuses on the protection 
                    of wildlife and the environment, education, infrastructure, and/ or eco-friendly 
                    commercial product development. A career in one of the related fields mentioned 
                    that leads to well enough pay for me to comfortably take my family to Europe at 
                    least once a year and not be overly stressed about retirement is also a priority.
                </p>
                <p className="pageDescrip">
                    {/* 
                        Explain the major technologies used in the website. Incorporate the terminology you learned in the course. 
                        You learned more than MERN...what else did we explore?
                    */}
                    <strong>Major Technologies in this Website:</strong>
                    <ul>
                        <li>
                            Initially, the major technologies used in this website included hypertext transfer protocol (HTTP), uniform resource 
                            locator (URL), and HyperText Markup Language (HTML). An HTML homepage document was the first product created and was 
                            made with Microsoft VS Code, an HTML boilerplate, and some basic text content. This HTML document was then uploaded 
                            to a server, thus giving it a complete URL. The server provides a domain, and the specific HTML document is a new 
                            page path on that server. This allows clients to request the document when given the URL. The server then would 
                            send back an HTML document as an HTTP response.
                        </li>
                        <li>
                            The Static HTML document improved through use of Cascading Style Sheets (CSS). CSS allowed for the presentation 
                            improvement of multiple HTML documents simultaneously, affording a theme. A link tag to a CSS file, named “main.css”, 
                            was included in the boilerplate in the head element of the HTML files. Once a CSS file with that name was created, 
                            multiple HTML documents immediately adapted the same font, background image, color, and so much more. The “class” 
                            attribute was used for specific elements to give it some uniqueness. Elements including local anchors, certain 
                            paragraph elements, buttons, and others were given a class attribute to reference in the CSS file and apply more 
                            specific styling. 
                        </li>
                        <li>
                            JavaScript is an interpreted language that creates dynamic components and more recognizable programming functionality, 
                            for example variable creation, conditional statements, and functions. JavaScript code in this website is run using 
                            the program Node, through the use of downloaded packages. A framework called Express, that was developed using Node, 
                            provides more options when receiving an HTTP request. Express adds application programming interface (API) features 
                            for permitting get, post and deletion of data as well as naming ports and routes for the data to traverse through. 
                            The first major utilization of JavaScript, Node, and Express on this website began with the creation of a form. 
                            The attributes of a form include action and method, which contribute to how the interactions on the webpage are 
                            captured as events. These events are recognized and handled using the Express app API. This API uses the action 
                            attribute to designate a resource path where the data can be taken from the form and inserted into a handler 
                            function. Initially, the handler function was used to store the data and then post it in an additional HTML document. 
                            The most interesting ability thus far is now accessible at this point, which is using JavaScript code to apply more 
                            of the create, read, update, and delete (CRUD) properties. An entry to choose an object matching the name of an 
                            object from an array in a separate file is recorded. The properties of the array object can now be manipulated 
                            with JavaScript code to enhance readability, calculate total cost, and much more.
                        </li>
                        <li>
                            Asynchronous programming is how modern JavaScript is implemented to ensure that multiple lines of code can run 
                            simultaneously. A promise in JavaScript is a type of placeholder for an object that can be fulfilled by an 
                            asynchronous function using the await keyword. An event listener function was created to capture the click of a 
                            submit button with a unique identification attribute. This event listener function called an asynchronous function 
                            to fetch data from a provided randomized database and fill in the promise object. While that data is being retrieved, 
                            additional lines of code to adjust a table and print statements to the console and webpage showing the status of the 
                            data request are displayed.
                        </li>
                        <li>
                            Prior to the inclusion of the asynchronous programming, the Document Object Model (DOM) tree which represents the 
                            structure of the webpage was completely unaltered from the initial HTTP request loading the webpage into the client 
                            browser. JavaScript was now being used to manipulate element nodes like a table in the DOM tree of the Staff HTML 
                            file, to add rows and data into the parent table node. 
                        </li>
                        <li>
                            As the data on the website became more extensive, the need to implement a more efficient database management system 
                            (DBMS) grew. A document DBMS called MongoDB was used to store and manipulate a database for the backend of this 
                            website. MongoDB is linked to this web application via an Object Document Mapper called Mongoose, a connection 
                            string with the MongoDB account information and database location, and a designated port to contain the entries 
                            in a format called BSON, which is a binary version of JSON. Using a DBMS like MongoDB, a new structure for our 
                            webpage is implemented, affecting the DOM tree even further. JavaScript files are used to create a model for the 
                            database, which adds identification (ID) numbers to each object created in the database. These IDs are then used 
                            in functions to retrieve, edit, or delete the object. The function variables are exported into a middle-man 
                            JavaScript file to communicate the changes or actions to the DOM tree.
                        </li>
                        <li>
                            A framework called React for writing frontend applications components is active in this web application. React 
                            allows for data to be updated by component, similar to nodes, causing updates in the DOM tree. This method of 
                            managing inputs classifies these components as Controlled Components/ Forms. This method is better suited for modern 
                            applications due to many industries dividing tasks among various groups that each handle the different content of pages 
                            and possibly all updating the same DOM tree instead of creating multiple HTML forms with individual URLs. In this web 
                            application, React components are inserted into the body element of an index HTML file using a div tag element with a 
                            root ID attribute. An index.js file uses the root attribute to render the React components in the webpage and modify 
                            the DOM tree. An App.js file is the main body of the function within the index.js file that renders all the components 
                            for this webpage. The components to display different pages are routed from the App.js file instead of previously 
                            anchoring each different HTML file page to each other.
                        </li>
                        <li>
                            The technique of not creating multiple HTML files and instead making updates to a single DOM tree is known as a 
                            Single Page Application (SPA). The main benefit of utilizing an SPA is providing an asynchronous experience for 
                            the user by only revising necessary components. The use of an SPA also contributes to conforming the Representational 
                            State Transfer (REST) API guidelines. This web application follows REST guidelines by first managing a collection, 
                            which in this case are roles, each with a unique ID. CRUD methods allow for manipulation of the collection data and 
                            route handlers get the ID from the route parameters of the URL, using Express. The combination of the mentioned 
                            technologies creates a full-stack MERN (MongoDB, Express, React, Node) application capable of implementing CRUD 
                            with high reliability and low response times.
                        </li>
                    </ul>
                </p>
            </article>
        </>
  );
}                

export default HomePage;            