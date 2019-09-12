<template>
    <div id="reg_form">
        <h3>Lägg till en miljö</h3><br>
        <input class="text_input" name="name" id="name" size="35" placeholder="Name..." title="Enter a Name" required/><br>
        <input class="text_input" name="location" id="location" size="35" placeholder="Location..." title="Enter a Location" required/><br>
        <input style="" type="submit" class="f_button" value="skapa" @click="onClick" />
    </div>
</template>