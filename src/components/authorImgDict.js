import profileData from '../page_data/our_team.js';

function getAuthorImgDict(profile_groups) {
  var authorImgDict = {}

  for(var g of profile_groups) {
    for(var i of g.items) {
      authorImgDict[i.name] = {
      	"image_filename": i.image_filename,
      	"linkedin_profile": i.linkedin_profile,
      }
    }
  }

  return authorImgDict
}

const authorImgDict = getAuthorImgDict(profileData)

export default authorImgDict;