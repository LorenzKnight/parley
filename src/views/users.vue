<template>
  <div class="users">
    <div class="users_list">
        <table width="90%" cellspacing="0" class="table_user">
            <tr height="40" style="color: #000;">
                <td width="14%" nowrap="nowrap" align="center" style="border-bottom: 1px solid #999;">ID</td>
                <td width="14%" nowrap="nowrap" align="center" style="border-bottom: 1px solid #999;">Namn</td>
                <td width="16%" nowrap="nowrap" align="center" style="border-bottom: 1px solid #999;">Email</td>
                <td width="14%" nowrap="nowrap" align="center" style="border-bottom: 1px solid #999;">nivå</td>
                <td width="14%" nowrap="nowrap" align="center" style="border-bottom: 1px solid #999;">status</td>
                <td width="14%" nowrap="nowrap" align="center" style="border-bottom: 1px solid #999;">last uppdate</td>
                <td width="14%" nowrap="nowrap" align="center" style="border-bottom: 1px solid #999;">Options</td>
            </tr>
            <tr height="40" v-for="(d,i) in data" :key="i">
                <td width="14%" nowrap="nowrap" align="center">{{d.id}}</td>
                <td width="14%" nowrap="nowrap" align="center">{{d.name}}</td>
                <td width="16%" nowrap="nowrap" align="center">{{d.email}}</td>
                <td width="14%" nowrap="nowrap" align="center">{{d.level}}</td>
                <td width="14%" nowrap="nowrap" align="center">{{d.status}}</td>
                <td width="14%" nowrap="nowrap" align="center">{{d.uppdate}}</td>
                <td width="14%" nowrap="nowrap" align="center">
                  <input @click.stop.prevent="showFormR = i" style="background-color: goldenrod;" type="submit" class="r_button" value="Rediger" />
                  <input style="background-color: orangered;" type="submit" class="r_button" value="Radera" />
                </td>
            </tr>
        </table>
      </div>
        <input v-if="!showForm && showFormR === -1" @click.stop.prevent="showForm = true" type="submit" class="add_button" value="+" />
        <userform ref="userform" :header="'Skappa en ny användare'" v-else-if="showForm" id="user_form"/>
        <userform ref="userform" :header="'ID: ' + data[showFormR].id" v-else-if="showFormR !==-1" id="user_form" @submit="submit"/>
    
  </div>
</template>
<script>
import userform from './userform.vue'
export default {
 name: 'users_list',
  data() {
    return {
        showForm: false,
        showFormR: -1,
        data: [
            {
                id: '01',
                name: 'Johan',
                email: 'johan@gmail.com',
                level: 'Admin',
                status: 'activ',
                uppdate: '2019-08-05 18:54:53'
            },
            {
                id: '02',
                name: 'Anders',
                email: 'Anders@gmail.com',
                level: 'Admin',
                status: 'activ',
                uppdate: '2019-08-05 18:54:53'
            },
        ]
    }
  },
  components: {
    userform,
  },
  methods: {
    onClick(e) {
      document.getElementById('')
      if (this.$refs.userform && !this.isElementOrDescendant(this.$refs.userform.$el, e.target)) {
        this.showForm = false
        this.showFormR = -1
      }
    },
    submit (event) {

    },
    isElementOrDescendant(parent, child) {
      if (parent === child) return true

      var node = child.parentNode;
      while (node != null) {
        if (node == parent) {
          return true;
        }
        node = node.parentNode;
      }
      return false;
    }
  },
  mounted () {
    document.addEventListener('click', this.onClick)
  },
  destroyed () {
    document.removeEventListener('click', this.onClick)
  },
}
</script>