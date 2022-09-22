import displayText, {init} from './helper/exerciseHelper'
import roomHelper, {TEMP_MAX, calculPerimetre} from './helper/roomHelper'

init()
displayText('Hello World')

let lib = "Air de d'un pièce de 2 par 5 donne " + roomHelper(2, 5)
displayText(lib)

lib = "Périmètre de d'un pièce de 2 par 5 donne " + calculPerimetre(2, 5)
displayText(lib)

lib = "La température max d'une pièce est " + TEMP_MAX
displayText(lib)
