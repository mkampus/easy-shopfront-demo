import './App.css';
import {
    Box,
    Button,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Container,
    Grid, IconButton,
    Link,
    TextField,
    Typography
} from "@mui/material";
import {useState} from "react";
import DeleteIcon from '@mui/icons-material/Delete';


function App() {

    const [data, setData] = useState(
        [
            {
                name: 'Rad Shirt 1',
                price: '100',
                image: 'https://static.zajo.net/content/mediagallery/zajo_dcat/image/product/types/X/9088.png'
            },
            {
                name: 'Kickin` cloth 2',
                price: '50',
                image: 'https://static.zajo.net/content/mediagallery/zajo_dcat/image/product/types/X/9088.png'
            },
            {
                name: 'Bodacious fabric 3',
                price: '40',
                image: 'https://static.zajo.net/content/mediagallery/zajo_dcat/image/product/types/X/9088.png'
            }
        ]
    )



    function uploadData() {

    }

    const deleteProduct = (name) => {
        console.log(name)
        console.log(data.findIndex((data) => data.name === name));
        setData(data.filter((data) => data.name !== name));
    }

    return (
        <div className="App">
            <div>
                <Container>
                    <Typography
                        color="textPrimary"
                        variant="h3"
                        align="center"
                        paragraph
                    > Storefront{" "} </Typography>
                    <Typography color="textPrimary"
                                variant="h4"
                                align="center"
                                paragraph>Add your product below.</Typography>


                    <Button
                        variant="outlined"
                        component="label"
                    >
                        Upload Product Image
                        <input
                            type="file"
                            hidden
                        />
                    </Button>

                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': {m: 1, width: '25ch'},
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="outlined-basic" label="Product Name" variant="outlined"/>
                        <TextField id="outlined-basic2" label="Product Price" variant="outlined"/>
                    </Box>

                    <Button
                        variant="contained"
                        component="label"
                    >
                        Upload Product
                        <input onClick={uploadData}
                            type="button"
                            hidden
                        />
                    </Button>



                    <Grid container spacing={1}>

                        {data.map((product, index) => (
                            <Grid item xs={12} sm={3} key={index} label={product.name}>
                                <Card sx={{
                                    display: 'block',
                                    width: '345',
                                    boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
                                    backgroundColor: "#fafafa",
                                    height: 1,
                                    transition: "transform 0.15s ease-in-out",
                                    "&:hover": {transform: "scale3d(1.02, 1.02, 1)"},
                                    transformStyle: 'preserve-3d',
                                }}>
                                    <div align='right'>
                                        <IconButton aria-label="delete" size="small" onClick={() => deleteProduct(product.name)}>
                                            <DeleteIcon fontSize="inherit" />
                                        </IconButton>
                                    </div>

                                    <CardActionArea >
                                        <CardMedia sx={{height: 375, maxWidth: 345,}}
                                                                          image={product.image}/>

                                    </CardActionArea>

                                    <CardContent>

                                        <Typography color="primary" variant="h5"
                                        >
                                            <Link href="#" underline="none"> {product.name}  </Link>
                                        </Typography>
                                        <Typography color="primary" variant="h5"
                                        >
                                            <Link href="#" underline="none"> {product.price}  </Link>
                                        </Typography>
                                        <Button variant='contained'>Add to Cart</Button>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </div>
        </div>
    );
}

export default App;
