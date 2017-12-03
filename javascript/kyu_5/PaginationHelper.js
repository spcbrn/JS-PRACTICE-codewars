
//URL: https://www.codewars.com/kata/paginationhelper
//kyu: 6


function PaginationHelper(collection, itemsPerPage) {
  this.collection = collection;
  this.perPage = itemsPerPage;
  this.totalPages = Math.ceil(this.collection.length / this.perPage);
}

let test = new PaginationHelper(['a','b','c','d','e','f','a','b','c','d','e','f'], 4);

PaginationHelper.prototype.itemCount = function() {
  return this.collection;
};
PaginationHelper.prototype.pageCount = function() {
  return this.totalPages
};
PaginationHelper.prototype.pageItemCount = function(pageIndex) {
  let paginatedItems = 0;
  for (let i = 0; i <= pageIndex; i++) {
    paginatedItems += this.perPage
  }
  let remainder = this.collection.length - paginatedItems;
  console.log(this.collection.length, paginatedItems, remainder)
  return remainder < -this.perPage ? -1
         : null
};
PaginationHelper.prototype.pageIndex = function(itemIndex) {

};
