
//URL: https://www.codewars.com/kata/paginationhelper
//kyu: 6


const PaginationHelper = (collection, itemsPerPage) => {
  this.collection = collection;
  this.perPage = itemsPerPage;
}

let test = new PaginationHelper([1,2], 1);

PaginationHelper.prototype.itemCount = () => this.collection.length;
PaginationHelper.prototype.pageCount = () => this.perPage;


console.log(Math.ceil(6/4))
