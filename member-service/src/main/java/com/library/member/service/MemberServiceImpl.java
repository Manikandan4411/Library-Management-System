package com.library.member.service;

import com.library.member.entity.Member;
import com.library.member.exception.MemberNotFoundException;
import com.library.member.repository.MemberRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MemberServiceImpl implements MemberService {

    private final MemberRepository memberRepository;

    public MemberServiceImpl(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    @Override
    public Member addMember(Member member) {
        return memberRepository.save(member);
    }

    @Override
    public List<Member> getAllMembers() {
        return memberRepository.findAll();
    }

    @Override
    public Member getMemberById(Long id) {
        return memberRepository.findById(id)
                .orElseThrow(() -> new MemberNotFoundException("Member not found with id " + id));
    }

    @Override
    public Member updateMember(Long id, Member member) {
        Member existingMember = getMemberById(id);
        existingMember.setName(member.getName());
        existingMember.setEmail(member.getEmail());
        existingMember.setPhone(member.getPhone());
        return memberRepository.save(existingMember);
    }

    @Override
    public void deleteMember(Long id) {
        Member existingMember = getMemberById(id);
        memberRepository.delete(existingMember);
    }
}
