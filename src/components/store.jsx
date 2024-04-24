import axios from "axios";
import React , {Component} from "react";

class StorePage extends Component {
    state = {
        productlist : []
      } 
    async componentDidMount(){
        const response = await axios.get('https://fakestoreapi.com/products')
        this.setState({productlist : response.data})
    }
    render() { 
        const tokenAuth = localStorage.getItem('tokenUser')
        return (
            <>
            {
                tokenAuth ? (
                    <>
                    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-6xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Product Shop</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {this.state.productlist.map((product) => (
            <div key={product.id} className="group relative ">
              <div className="aspect-h-1 aspect-w-1 w-3/4 overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-3/4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700 ">
                    <a href={`/store/${product.id}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.title}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                  <div className="flex justify-between mt-4">
                <p className="text-sm font-medium text-gray-900">{product.price}$</p>
                </div>
                </div>
              </div>
            </div>
            
            
          ))}
        </div>
      </div>
    </div>
                    </>
                ) : window.location = '/'
            }
            </>
        );
    }
}
 
export default StorePage;