<template>
    <div class="user_form">
        <h4>{{header}}</h4><br>
        <input class="text_input_r" name="name" id="name" size="35" placeholder="Name..." title="Enter a Name" required/><br>
        <input class="text_input_r" name="email" id="email" size="35" placeholder="E-mail..." title="Enter a mail" required/><br>
        <select class="text_input_r" style="width: 200px; text-align: center; font-size: 14px; color: #999;" name="level" id="level" required>
            <option value="0">Admin</option>
            <option value="1">Redaktör</option>
        </select><br>
        <select class="text_input_r" style="width: 200px; text-align: center; font-size: 14px; color: #999;" name="status" id="status" required>
            <option value="0">Activ</option>
            <option value="1">Inactiv</option>
        </select><br>
        <input style="" type="submit" class="f_button" value="uppdatera" @click="onClick" />
    </div>
</template>

<script>
export default {
    props: {
        header: {
            type: String
        }
    }, methods: {
        onClick () {
            const formData = {

            }

            this.$emit('submit', formData)
        }
    }
}
</script>