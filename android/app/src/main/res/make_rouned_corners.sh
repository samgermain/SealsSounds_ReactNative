convert -size 72x72 xc:none -draw "roundrectangle 0,0,72,72,5,5" mask.png
convert mipmap-hdpi/ic_launcher.png -matte mask.png -compose DstIn -composite picture_with_rounded_corners.png 
mv picture_with_rounded_corners.png mipmap-hdpi/ic_launcher.png 

convert -size 36x36 xc:none -draw "roundrectangle 0,0,36,36,5,5" mask.png
convert mipmap-ldpi/ic_launcher.png -matte mask.png -compose DstIn -composite picture_with_rounded_corners.png 
mv picture_with_rounded_corners.png mipmap-ldpi/ic_launcher.png 

convert -size 48x48 xc:none -draw "roundrectangle 0,0,48,48,5,5" mask.png                             
convert mipmap-mdpi/ic_launcher.png -matte mask.png -compose DstIn -composite picture_with_rounded_corners.png
mv picture_with_rounded_corners.png mipmap-mdpi/ic_launcher.png                                              

convert -size 96x96 xc:none -draw "roundrectangle 0,0,96,96,10,10" mask.png                         
convert mipmap-xhdpi/ic_launcher.png -matte mask.png -compose DstIn -composite picture_with_rounded_corners.png
mv picture_with_rounded_corners.png mipmap-xhdpi/ic_launcher.png                                              

convert -size 144x144 xc:none -draw "roundrectangle 0,0,144,144,15,15" mask.png                      
convert mipmap-xxhdpi/ic_launcher.png -matte mask.png -compose DstIn -composite picture_with_rounded_corners.png
mv picture_with_rounded_corners.png mipmap-xxhdpi/ic_launcher.png                                               

convert -size 192x192 xc:none -draw "roundrectangle 0,0,192,192,15,15" mask.png                         
convert mipmap-xxxhdpi/ic_launcher.png -matte mask.png -compose DstIn -composite picture_with_rounded_corners.png
mv picture_with_rounded_corners.png mipmap-xxxhdpi/ic_launcher.png  
