<template>
  <div class="chat-dashboard">
    <ChatNavBar />
    <b-container fluid class="ld-over" v-bind:class="{ running: loading }">
      <div class="ld ld-ring ld-spin"></div>
      <b-row>
        <b-col cols="2">
          <RoomList />
        </b-col>

        <b-col cols="8">
          <b-row>
            <b-col id="chat-content">
              <MessageList />
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <MessageForm />
            </b-col>
          </b-row>
        </b-col>

        <b-col cols="2">
          <UserList />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import MessageForm from '@/components/MessageForm'
import MessageList from '@/components/MessageList'
import RoomList from '@/components/RoomList'
import ChatNavBar from '@/components/ChatNavBar'
import UserList from '@/components/UserList'
import { mapState } from 'vuex'
export default {
  name:'Chat',
  data() {
    return {
      
    }
  },
  components:{
    MessageForm,//用于将消息发送到所选房建的表单
    MessageList,//显示在选定房间中发布的消息
    RoomList,//其中列出了已登录用户有权访问的房间,也就是房间选择器
    ChatNavBar,//一个基本的导航栏
    UserList//其中列出了所选房建的成员
  },
  computed: {
    ...mapState(['loading'])
  },
}
</script>
