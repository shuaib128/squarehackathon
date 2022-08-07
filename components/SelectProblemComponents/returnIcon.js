const images = [
    "backglass.png", "charging.png", "datarecovery.png", "earpice.png",
    "homebutton.png", "powerbutton.png", "screen.png", "speaker.png",
    "volumebutton.png", "waterdamage.png"
]

export const returnIcon = (icon_name) => {
    var image_url = ""
    switch (icon_name) {
        case "Screen Repair":
            image_url = "screen.png"
            break;

        case "Screen Protector":
            image_url = "screenprotector.png"
            break;

        case "OLED Repair":
            image_url = "OLED.png"
            break;

        case "Back Glass Repair":
            image_url = "backglass.png"
            break;

        case "Battery Replacement":
            image_url = "charging.png"
            break;

        case "Charging Port Repair":
            image_url = "chargingport.png"
            break;

        case "Ear Speaker Repair":
            image_url = "earpice.png"
            break;

        case "Loud Speaker Repair":
            image_url = "speaker.png"
            break;

        case "Volume Button Repair":
            image_url = "volumebutton.png"
            break;

        case "Home Button Repair":
            image_url = "homebutton.png"
            break;

        case "Power Button Repair":
            image_url = "powerbutton.png"
            break;

        case "Mute Switch Repair":
            image_url = "mutebutton.png"
            break;

        case "Data Recovery":
            image_url = "datarecovery.png"
            break;

        case "Water Damage":
            image_url = "waterdamage.png"
            break;

        case "Back Camera Repair":
            image_url = "backcamera.png"
            break;

        case "Back Camera Lens Repair":
            image_url = "lens.png"
            break;

        case "Vibrate Motor Repair":
            image_url = "vibrate.png"
            break;
    }

    return image_url
}