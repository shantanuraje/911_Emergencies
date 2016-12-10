//emergency object
function Emergency(latitude,longitude,description,zip,title,timeStamp,township,address){
  this.latitude = parseFloat(latitude) //float
  this.longitude = parseFloat(longitude)//float
  this.description = description//String
  this.zip = zip//String since some zips are missing
  this.title = title//string
  this.timeStamp = timeStamp //string
  this.township = township//string
  this.address = address//string
}
