import React, { useState, useEffect, createContext } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CartItems from "../CartItems/CartItems";
import { ProductProperties } from "./ProductList.types";
import { useStyles } from "./style";

export const CartData = createContext<ProductProperties[] | null>(null);

const ProductArray = [
  {
    productName: "Hoodie",
    productDiscription: "Classic hoddies, pure cotton with anti-bacterial",
    productPrice: "600.00",
    productImage:
      "https://i.pinimg.com/originals/0c/53/2a/0c532a5d84824207664b8bbf78662c6c.jpg",
  },
  {
    productName: "Black Hoodie",
    productDiscription: "Classic hoddies, pure cotton with anti-bacterial",
    productPrice: "500.00",
    productImage:
      "https://images-na.ssl-images-amazon.com/images/I/51raLxaj9VL._AC_UX385_.jpg",
  },
  {
    productName: "Yellow Hoodie",
    productDiscription: "Classic hoddies, pure cotton with anti-bacterial",
    productPrice: "400.00",
    productImage:
      "https://images.unsplash.com/photo-1564557287817-3785e38ec1f5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG9vZGllfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
  },
  {
    productName: "Red Hoodie",
    productDiscription: "Classic hoddies, pure cotton with anti-bacterial",
    productPrice: "900.00",
    productImage:
      "https://images-na.ssl-images-amazon.com/images/I/51raLxaj9VL._AC_UX385_.jpg",
  },
  {
    productName: "Classic Hoodie",
    productDiscription: "Classic hoddies, pure cotton with anti-bacterial",
    productPrice: "800.00",
    productImage:
      "https://i.pinimg.com/originals/0c/53/2a/0c532a5d84824207664b8bbf78662c6c.jpg",
  },
  {
    productName: "Blue Hoodie",
    productDiscription: "Classic hoddies, pure cotton with anti-bacterial",
    productPrice: "1500.00",
    productImage:
      "https://images.unsplash.com/photo-1564557287817-3785e38ec1f5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG9vZGllfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
  },
  {
    productName: "Beige Hoodie",
    productDiscription: "Classic hoddies, pure cotton with anti-bacterial",
    productPrice: "1204.00",
    productImage:
      "https://images-na.ssl-images-amazon.com/images/I/51raLxaj9VL._AC_UX385_.jpg",
  },
  {
    productName: "Pink Hoodie",
    productDiscription: "Classic hoddies, pure cotton with anti-bacterial",
    productPrice: "1208.00",
    productImage:
      "https://i.pinimg.com/originals/0c/53/2a/0c532a5d84824207664b8bbf78662c6c.jpg",
  },
];

export default function ProductList() {
  const classes = useStyles();

  const [itemData, setItemData] = useState(ProductArray);
  const [cartItems, setCartItems] = useState<any[]>([]);

  const addToCart = async (k: any) => {
    await setCartItems([...cartItems, k]);
  };

  return (
    <CartData.Provider value={cartItems}>
      <div className={classes.Body}>
        {console.log(cartItems)}
        <div className={classes.cardRoot}>
          {itemData.map((e) => (
            <Card className={classes.root}>
              {console.log(itemData)}
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={e.productImage}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {e.productName}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                  ></Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {e.productDiscription}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <b>${e.productPrice}</b>
                <Button
                  size="small"
                  variant="outlined"
                  color="primary"
                  onClick={() => addToCart(e)}
                >
                  Add to cart
                </Button>
              </CardActions>
            </Card>
          ))}
        </div>
        <CartItems />
      </div>
    </CartData.Provider>
  );
}
