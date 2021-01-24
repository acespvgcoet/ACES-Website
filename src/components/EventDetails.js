import React from "react";
import "../css/EventDetails.css";

function EventDetails() {
  return (
    <div className="card">
     <div class="card_title">
                title
           </div>
            <div class="card_photo">
         
           </div>
           <div class="card_content">
              <div class="card_content_title">
                Android software Development
              </div>
              <div class="card_content_des">
                Android software development is the process by which applications are created for devices running the Android operating system.
                 Google states that[3] "Android apps can be written using Kotlin, Java, and C++ languages" using the Android software development kit (SDK), 
                 while using other languages is also possible. All non-JVM languages, such as Go, JavaScript, C, C++ or assembly, need the help of JVM language code,
                  that may be supplied by tools, likely with restricted API support. Some programming languages 
                  and tools allow cross-platform app support (i.e. for both Android and iOS). Third party tools, development environments, 
                  and language support have also continued to evolve and expand since the initial SDK was released in 2008. The official Android 
                  app distribution mechanism to end users is Google Play; 
                it also allows staged gradual app release, as well as distribution of pre-release app versions to testers.

               </div>
            </div>
        
           <div class="card_link">
              <div class="link_title">
                clink on link below
               </div>
              <div class="link">
                https://www.figma.com/file/l0HJwXrpgi5qv08oGwaAqr/Untitled?node-id=1%3A68 
              </div>
           </div>
    </div>
  );
}

export default EventDetails;