function ProductCard(props) {
    return (
      <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
        <h2>{props.name}</h2>
        <p>Price: ${props.price}</p>
        <img src={props.image} alt={props.name} width="100" />
      </div>
    );
  }
  
  function Appppp() {
    return (
      <div>
        <ProductCard
          name="iPhone 15"
          price="999"
          image="https://via.placeholder.com/100"
        />
        <ProductCard
          name="Samsung Galaxy S24"
          price="899"
          image="https://via.placeholder.com/100"
        />
        <ProductCard
        name='Redmi note 9 pro'
        price='Rs 19999'
        />
      </div>
    );
  }
  
  // props are very useful while rendering real time data 
  //As we created one component name product card it shows name/price and image
  //using that card componenet we can render multiple objects 
  //simply by giving props as argument to function 
  // take inputs as props.name/props.price
  //then give in app <productcard name='samsung' ext;
  //Props help in component reusability.
  // // They allow data to be passed from parent to child components.
// They are immutable inside the child component.


//"""""""""""""""""""""""""""''"
//Chilren and props in react

function Card({ title, children, backgroundColor }) {
    return (
      <div style={{ 
        border: "1px solid gray", 
        padding: "15px", 
        margin: "10px", 
        borderRadius: "5px",
        backgroundColor: backgroundColor || "white"
      }}>
        <h2>{title}</h2>
        {children}
      </div>
    );
  }
  
  function Apppp() {
    return (
      <div>
        <Card title="React Props & Children" backgroundColor="lightblue">
          <p>This post explains how props and children work in React.</p> 
          <button>Read More</button>  
        </Card>
  
        <Card title="Understanding useState Hook" backgroundColor="lightgreen">
          <p>Learn how to manage state in React using the useState hook.</p>
          <button>Explore</button>
        </Card>
        <Card title="Understanding useState Hook" backgroundColor="pinkish">
          <h1>Hello welcome</h1>
          <button>Explore</button>
        </Card>
      </div>
    );
  }
  
  /*Card Component

Accepts title (a prop) to display as a heading.
Uses children to render any content inside the <Card> component.
Uses backgroundColor as an optional prop to customize the card color.
App Component

Renders multiple Card components, passing different props (title and backgroundColor).
Each card contains different children (text, buttons).*/
  


  